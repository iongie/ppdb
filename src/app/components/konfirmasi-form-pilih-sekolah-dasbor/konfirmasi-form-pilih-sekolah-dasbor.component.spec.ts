import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonfirmasiFormPilihSekolahDasborComponent } from './konfirmasi-form-pilih-sekolah-dasbor.component';

describe('KonfirmasiFormPilihSekolahDasborComponent', () => {
  let component: KonfirmasiFormPilihSekolahDasborComponent;
  let fixture: ComponentFixture<KonfirmasiFormPilihSekolahDasborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KonfirmasiFormPilihSekolahDasborComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KonfirmasiFormPilihSekolahDasborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
