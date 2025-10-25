import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskfieldDumbComponent } from './taskfield.dumb.component';

describe('TaskfieldDumbComponent', () => {
  let component: TaskfieldDumbComponent;
  let fixture: ComponentFixture<TaskfieldDumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskfieldDumbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskfieldDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
