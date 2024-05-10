import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'ppdb-dasbor',
  templateUrl: './dasbor.component.html',
  styleUrl: './dasbor.component.css'
})
export class DasborComponent implements OnInit, OnDestroy {
  open: boolean = true;
  private destroy: Subject<void> = new Subject<void>;

  viewKonfirmasiLogout: boolean = false;
  constructor(
  ){}
  actionMenu(){
    this.open = !this.open
  }

  actionMenuFromSidebar(ev: boolean){
    this.open = ev
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  getLogout(ev:boolean){
    this.viewKonfirmasiLogout = ev
  }
}
