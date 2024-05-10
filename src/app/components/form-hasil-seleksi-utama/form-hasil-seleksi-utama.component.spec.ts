import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHasilSeleksiUtamaComponent } from './form-hasil-seleksi-utama.component';

describe('FormHasilSeleksiUtamaComponent', () => {
  let component: FormHasilSeleksiUtamaComponent;
  let fixture: ComponentFixture<FormHasilSeleksiUtamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormHasilSeleksiUtamaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormHasilSeleksiUtamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
