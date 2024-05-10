import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPilihSekolahDasborComponent } from './form-pilih-sekolah-dasbor.component';

describe('FormPilihSekolahDasborComponent', () => {
  let component: FormPilihSekolahDasborComponent;
  let fixture: ComponentFixture<FormPilihSekolahDasborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormPilihSekolahDasborComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormPilihSekolahDasborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
