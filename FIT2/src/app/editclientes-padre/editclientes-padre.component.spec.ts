import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditclientesPadreComponent } from './editclientes-padre.component';

describe('EditclientesPadreComponent', () => {
  let component: EditclientesPadreComponent;
  let fixture: ComponentFixture<EditclientesPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditclientesPadreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditclientesPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
