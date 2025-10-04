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

  describe('when workday page loads', () => {
    it('should display the "add task" button', () => {
      const button = getAddTaskButton();
      expect(button).toBeDefined();
    });
  });

  describe('when user remove a task', () => {
  it('should remove corresponding task', () => {
    // Arrange
    component.store.onAddTask();
    component.store.onAddTask();
    component.store.onAddTask();
    fixture.detectChanges();

    // Set task titles
    const taskInputs = fixture.nativeElement.querySelectorAll('[data-test=task-input]');
    taskInputs[0].value = 'tache 1';
    taskInputs[0].dispatchEvent(new Event('input'));
    taskInputs[1].value = 'tache 2';
    taskInputs[1].dispatchEvent(new Event('input'));
    taskInputs[2].value = 'tache 3';
    taskInputs[2].dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Act
    const removeButtons = fixture.nativeElement.querySelectorAll('[data-test=remove-task-button]');
    removeButtons[1].click();
    fixture.detectChanges();

    // Assert
    const updatedTaskInputs = fixture.nativeElement.querySelectorAll('[data-test=task-input]');
    expect(updatedTaskInputs[1].value).toBe('tache 3');
  });
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


