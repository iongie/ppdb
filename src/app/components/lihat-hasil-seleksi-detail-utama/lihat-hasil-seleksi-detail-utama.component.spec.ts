import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LihatHasilSeleksiDetailUtamaComponent } from './lihat-hasil-seleksi-detail-utama.component';

describe('LihatHasilSeleksiDetailUtamaComponent', () => {
  let component: LihatHasilSeleksiDetailUtamaComponent;
  let fixture: ComponentFixture<LihatHasilSeleksiDetailUtamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LihatHasilSeleksiDetailUtamaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LihatHasilSeleksiDetailUtamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
