import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Subject, takeUntil, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { NavigasiService } from '../../services/navigasi/navigasi.service';

@Component({
  selector: 'ppdb-header-utama',
  templateUrl: './header-utama.component.html',
  styleUrl: './header-utama.component.css'
})
export class HeaderUtamaComponent implements OnInit, OnDestroy {
  url: string | null = null;
  private destroy: Subject<void> = new Subject<void>;
  safeUrlppdb: SafeUrl | null = null;
  menuKondisi: Boolean = false;
  constructor(
    private sanitizer: DomSanitizer,
    private navigasiS: NavigasiService
  ) { }

  ngOnInit(): void {
    this.safeUrlppdb = this.sanitizer.bypassSecurityTrustResourceUrl(environment.URL_PPDB);
    this.getNavigasi();
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  getNavigasi(){
    this.navigasiS.dapatkanUrl
    .pipe(
      tap(n=> {
        this.url = n
      }),
      takeUntil(this.destroy)
    )
    .subscribe()
  }

  menu(){
    this.menuKondisi = !this.menuKondisi
  }

  menuMobile(ev: boolean ){
    this.menuKondisi = ev;
  }
}
