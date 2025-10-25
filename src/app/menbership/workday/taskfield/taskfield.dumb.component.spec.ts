import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskfieldDumbComponent } from './taskfield.dumb.component';
describe('TaskfieldDumbComponent', () => {
  let component: TaskfieldDumbComponent;
  let fixture: ComponentFixture<TaskfieldDumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskfieldDumbComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskfieldDumbComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('index', 0);
    fixture.componentRef.setInput('task', {
      type: 'Hit the target',
      title: 'Nouvelle tâche',
      pomodoroCount: 1,
      pomodoroList: [],
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
