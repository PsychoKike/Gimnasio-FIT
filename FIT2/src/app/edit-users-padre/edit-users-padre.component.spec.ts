import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUsersPadreComponent } from './edit-users-padre.component';

describe('EditUsersPadreComponent', () => {
  let component: EditUsersPadreComponent;
  let fixture: ComponentFixture<EditUsersPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditUsersPadreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUsersPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
