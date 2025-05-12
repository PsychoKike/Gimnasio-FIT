import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUsersHijoComponent } from './edit-users-hijo.component';

describe('EditUsersHijoComponent', () => {
  let component: EditUsersHijoComponent;
  let fixture: ComponentFixture<EditUsersHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditUsersHijoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUsersHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
