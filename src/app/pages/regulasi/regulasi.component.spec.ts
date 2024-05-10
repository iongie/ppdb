import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulasiComponent } from './regulasi.component';

describe('RegulasiComponent', () => {
  let component: RegulasiComponent;
  let fixture: ComponentFixture<RegulasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegulasiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegulasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
