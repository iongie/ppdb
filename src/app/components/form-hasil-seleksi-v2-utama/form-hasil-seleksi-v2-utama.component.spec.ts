import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHasilSeleksiV2UtamaComponent } from './form-hasil-seleksi-v2-utama.component';

describe('FormHasilSeleksiV2UtamaComponent', () => {
  let component: FormHasilSeleksiV2UtamaComponent;
  let fixture: ComponentFixture<FormHasilSeleksiV2UtamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormHasilSeleksiV2UtamaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormHasilSeleksiV2UtamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
