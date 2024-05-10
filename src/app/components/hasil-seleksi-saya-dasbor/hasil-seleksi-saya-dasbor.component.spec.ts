import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HasilSeleksiSayaDasborComponent } from './hasil-seleksi-saya-dasbor.component';

describe('HasilSeleksiSayaDasborComponent', () => {
  let component: HasilSeleksiSayaDasborComponent;
  let fixture: ComponentFixture<HasilSeleksiSayaDasborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HasilSeleksiSayaDasborComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HasilSeleksiSayaDasborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
