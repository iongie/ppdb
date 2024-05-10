import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsesComponent } from './proses.component';

describe('ProsesComponent', () => {
  let component: ProsesComponent;
  let fixture: ComponentFixture<ProsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProsesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
