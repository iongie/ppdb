import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHasilSeleksiV3UtamaComponent } from './form-hasil-seleksi-v3-utama.component';

describe('FormHasilSeleksiV3UtamaComponent', () => {
  let component: FormHasilSeleksiV3UtamaComponent;
  let fixture: ComponentFixture<FormHasilSeleksiV3UtamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormHasilSeleksiV3UtamaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormHasilSeleksiV3UtamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
