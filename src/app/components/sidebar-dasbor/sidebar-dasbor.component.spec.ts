import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDasborComponent } from './sidebar-dasbor.component';

describe('SidebarDasborComponent', () => {
  let component: SidebarDasborComponent;
  let fixture: ComponentFixture<SidebarDasborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarDasborComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarDasborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
