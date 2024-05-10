import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonfirmasiLogoutComponent } from './konfirmasi-logout.component';

describe('KonfirmasiLogoutComponent', () => {
  let component: KonfirmasiLogoutComponent;
  let fixture: ComponentFixture<KonfirmasiLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KonfirmasiLogoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KonfirmasiLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
