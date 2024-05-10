import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasborComponent } from './dasbor.component';

describe('DasborComponent', () => {
  let component: DasborComponent;
  let fixture: ComponentFixture<DasborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DasborComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DasborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
