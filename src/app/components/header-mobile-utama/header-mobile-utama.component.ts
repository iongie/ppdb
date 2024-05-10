import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { Subject, tap, takeUntil } from 'rxjs';
import { environment } from '../../../environments/environment';
import { NavigasiService } from '../../services/navigasi/navigasi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ppdb-header-mobile-utama',
  templateUrl: './header-mobile-utama.component.html',
  styleUrl: './header-mobile-utama.component.css'
})
export class HeaderMobileUtamaComponent implements OnInit, OnDestroy {
  @Output() view = new EventEmitter<boolean>();
  url: string | null = null;
  private destroy: Subject<void> = new Subject<void>;
  safeUrlppdb: SafeUrl | null = null;
  constructor(
    private sanitizer: DomSanitizer,
    private navigasiS: NavigasiService,
    private router: Router
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
      tap(n=> this.url = n),
      takeUntil(this.destroy)
    )
    .subscribe()
  }

  menu(){
    this.view.emit(false)
  }

  gotoPage(url: string){
    this.router.navigate([url]);
    this.view.emit(false)
  }
}
