import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkdayPageComponent } from './workday.page.component';

describe('WorkdayPageComponent', () => {
  let component: WorkdayPageComponent;
  let fixture: ComponentFixture<WorkdayPageComponent>;

  const getAddTaskButton = () =>
    fixture.nativeElement.querySelector('[data-test=add-task-button]');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkdayPageComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkdayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when there is less than 6 tasks planned for the current day',() => {
    it('should display all tasks', () => {
       const button = getAddTaskButton();
       expect(button).toBeDefined();
    });
  });

  describe('when there are 6 tasks planned for the current day', () => {

    beforeEach(() => {

      component.store.onAddTask();
      component.store.onAddTask();
      component.store.onAddTask();
      component.store.onAddTask();
      component.store.onAddTask();
      fixture.detectChanges();
    });
    it('should display the "add task" button', () => {
      const button = getAddTaskButton();
      expect(button).toBeNull();
    });
  });
});


