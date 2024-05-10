import { Component, OnDestroy, OnInit } from '@angular/core';
import { StateResponService } from '../../services/state-respon/state-respon.service';
import { Router } from '@angular/router';
import { Subject, tap, switchMap, timer, takeUntil } from 'rxjs';
import { Respon, defRespon } from '../../interfaces/respon.interface';

@Component({
  selector: 'ppdb-respon-modal',
  templateUrl: './respon-modal.component.html',
  styleUrl: './respon-modal.component.css'
})
export class ResponModalComponent implements OnInit, OnDestroy {
  private destroy: Subject<void> = new Subject<void>();
  respon: Respon = defRespon
  constructor(
    private stateResponS: StateResponService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getRespon()
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  getRespon() {
    this.stateResponS.getModelModal
      .pipe(
        tap((r) => this.respon = r),
        takeUntil(this.destroy)
      ).subscribe()
  }
}
