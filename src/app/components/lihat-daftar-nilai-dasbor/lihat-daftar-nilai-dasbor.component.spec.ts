import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LihatDaftarNilaiDasborComponent } from './lihat-daftar-nilai-dasbor.component';

describe('LihatDaftarNilaiDasborComponent', () => {
  let component: LihatDaftarNilaiDasborComponent;
  let fixture: ComponentFixture<LihatDaftarNilaiDasborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LihatDaftarNilaiDasborComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LihatDaftarNilaiDasborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
