import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditclientesHijoComponent } from './editclientes-hijo.component';

describe('EditclientesHijoComponent', () => {
  let component: EditclientesHijoComponent;
  let fixture: ComponentFixture<EditclientesHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditclientesHijoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditclientesHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
