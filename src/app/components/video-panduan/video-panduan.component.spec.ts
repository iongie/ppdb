import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPanduanComponent } from './video-panduan.component';

describe('VideoPanduanComponent', () => {
  let component: VideoPanduanComponent;
  let fixture: ComponentFixture<VideoPanduanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoPanduanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoPanduanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
