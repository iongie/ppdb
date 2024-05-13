import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTahapanUtamaComponent } from './info-tahapan-utama.component';

describe('InfoTahapanUtamaComponent', () => {
  let component: InfoTahapanUtamaComponent;
  let fixture: ComponentFixture<InfoTahapanUtamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoTahapanUtamaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoTahapanUtamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
