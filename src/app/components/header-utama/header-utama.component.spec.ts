import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUtamaComponent } from './header-utama.component';

describe('HeaderUtamaComponent', () => {
  let component: HeaderUtamaComponent;
  let fixture: ComponentFixture<HeaderUtamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderUtamaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderUtamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
