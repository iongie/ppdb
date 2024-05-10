import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReCaptcha2Component } from 'ngx-captcha';
import { Subject, catchError, map, of, switchMap, takeUntil, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CallApiService } from '../../services/call-api/call-api.service';
import { StateLoginService } from '../../services/state-login/state-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ppdb-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, OnDestroy {
  private destroy: Subject<void> = new Subject<void>;
  captchaSiteKey = environment.CAPTCHA_SITE_KEY;
  @ViewChild('captchaElem', { static: false }) captchaElem!: ReCaptcha2Component;
  loginPpdbForm!: FormGroup;
  loginPpdbFormData: FormData | null = null;
  actionMessageError: boolean = false;
  messageError: string = '';
  isLoading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private callApiS: CallApiService,
    private StateLoginS: StateLoginService,
    private router: Router
  ){

  }

  ngOnInit(): void {
    console.log('hallo login')
    this.formLogin();
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  formLogin() {
    this.loginPpdbForm = this.fb.group({
      'nik': [{ value: null, disabled: false }, [Validators.required]],
      'pin': [{ value: null, disabled: false }, [Validators.required]],
      'g-recaptcha-response': ['', [Validators.required]]
    })
  }

  get nikControl() {
    return this.loginPpdbForm.get('nik')!;
  }

  get noNik() {
    return this.nikControl.hasError('required') && this.nikControl.touched;
  }

  get pinControl() {
    return this.loginPpdbForm.get('pin')!;
  }

  get noPin() {
    return this.pinControl.hasError('required') && this.pinControl.touched;
  }

  get recaptchaControl() {
    return this.loginPpdbForm.get('g-recaptcha-response')!;
  }

  get noRecaptcha() {
    return this.recaptchaControl.hasError('required') && this.recaptchaControl.touched;
  }

  recaptchaSuccess(ev: string) {
    this.loginPpdbForm.patchValue({ 'g-recaptcha-response': ev })
  }

  cancel() {
    console.log('cancel action');
    this.formLogin();
  }

  submit() {
    of(this.loginPpdbForm.valid)
    .pipe(
      tap(() => this.isLoading = true),
      map(n => {
        if (!n) {
          Object.values(this.loginPpdbForm.controls).forEach(control => {
            control.markAsTouched();
          });
          throw new Error('harap mengisi form data');
        }
        return n;
      }),
      tap((r) => {
        this.loginPpdbFormData = new FormData();
        this.loginPpdbFormData.append('nik', this.loginPpdbForm.get('nik')?.value)
        this.loginPpdbFormData.append('pin', this.loginPpdbForm.get('pin')?.value)
        this.loginPpdbFormData.append('g-recaptcha-response', this.loginPpdbForm.get('g-recaptcha-response')?.value)
      }),
      switchMap(() => this.callApiS.post(this.loginPpdbFormData, 'daftar/login')),
      tap(() => this.isLoading = false),
      tap(() => this.formLogin()),
      tap((r:any) => this.StateLoginS.updateLogin(r.data)),
      tap(() => this.router.navigate(['dasbor'])),
      catchError((e) => {
        this.isLoading = false;
        this.actionMessageError = true;
        this.messageError = e.message === 'harap mengisi form data' ? e.message : e.error.message ;
        throw e;
      }),
      takeUntil(this.destroy)
    ).subscribe()
  }

}
