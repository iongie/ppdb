import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { NavigasiService } from './services/navigasi/navigasi.service';
import { CallApiService } from './services/call-api/call-api.service';

@Component({
  selector: 'ppdb-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  url: string | null = null;
  private destroy: Subject<void> = new Subject<void>;

  constructor(
    private router: Router,
    private navigasiS: NavigasiService,
    private callApi: CallApiService
  ) { }

  ngOnInit(): void {
    this.navigation();
    this.getIp();
  }

  ngOnDestroy(): void {
    
  }

  navigation(){
    this.router.events
      .pipe(takeUntil(this.destroy))
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.navigasiS.perbaruiUrl(event.url)
        }
      });
  }

  getIp(){
    this.callApi.getIp('cek-ip')
    .pipe(
      takeUntil(this.destroy)
    ).subscribe()
  }
}
