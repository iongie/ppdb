import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponModalComponent } from './respon-modal.component';

describe('ResponModalComponent', () => {
  let component: ResponModalComponent;
  let fixture: ComponentFixture<ResponModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResponModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResponModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
