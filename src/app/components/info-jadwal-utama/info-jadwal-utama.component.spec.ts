import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoJadwalUtamaComponent } from './info-jadwal-utama.component';

describe('InfoJadwalUtamaComponent', () => {
  let component: InfoJadwalUtamaComponent;
  let fixture: ComponentFixture<InfoJadwalUtamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoJadwalUtamaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoJadwalUtamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
