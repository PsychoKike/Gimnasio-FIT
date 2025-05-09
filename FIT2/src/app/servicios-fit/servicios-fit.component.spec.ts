import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosFITComponent } from './servicios-fit.component';

describe('ServiciosFITComponent', () => {
  let component: ServiciosFITComponent;
  let fixture: ComponentFixture<ServiciosFITComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosFITComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosFITComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
