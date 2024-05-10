import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMobileUtamaComponent } from './header-mobile-utama.component';

describe('HeaderMobileUtamaComponent', () => {
  let component: HeaderMobileUtamaComponent;
  let fixture: ComponentFixture<HeaderMobileUtamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderMobileUtamaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderMobileUtamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
