import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportUsUtamaComponent } from './support-us-utama.component';

describe('SupportUsUtamaComponent', () => {
  let component: SupportUsUtamaComponent;
  let fixture: ComponentFixture<SupportUsUtamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupportUsUtamaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupportUsUtamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
