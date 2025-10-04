import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkdayPageComponent } from './workday.page.component';
import { By } from '@angular/platform-browser';

describe('WorkdayPageComponent', () => {
  let component: WorkdayPageComponent;
  let fixture: ComponentFixture<WorkdayPageComponent>;

  const getAddTaskButton = () =>
    fixture.nativeElement.querySelector('[data-testid=add-task-button]');

  /* Get task by position instead of index: getTask(1) <=> task at index 0. */
  const getTask = (id: number) =>
    fixture.debugElement.query(By.css(`[data-testid="task-${id - 1}"]`));
  const getTaskInput = (id: number) =>
    fixture.debugElement.query(By.css(`[data-testid="task-input-${id - 1}"]`));
  const getRemoveTaskButton = (id: number) =>
    fixture.debugElement.query(By.css(`[data-testid="task-remove-${id - 1}"]`));
  const setTaskTitle = (id: number, title: string) => {
    const input = getTaskInput(id).nativeElement as HTMLInputElement;
    input.value = title;
    input.dispatchEvent(new Event('input', { bubbles: true }));
    fixture.detectChanges();
  };



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
    it('should display one task', () => {
      expect(getTask(1)).toBeTruthy();
      expect(getTask(2)).toBeNull();
    });
    it('should display  "add task" button', () => {
      const button = getAddTaskButton();
      expect(button).toBeTruthy();
    });
  });

  describe('when user remove a task', () => {
  it('should remove corresponding task', () => {
    // Arrange
    const button = getAddTaskButton();
    button.nativeElement.click();
    button.nativeElement.click();
    button.nativeElement.click();
    fixture.detectChanges();
    setTaskTitle(1, 'tache 1');
    setTaskTitle(2, 'tache 2');
    setTaskTitle(3, 'tache 3');

    // Act
    getRemoveTaskButton(2).nativeElement.click();
    fixture.detectChanges();

    // Assert
    const secondTaskInput = getTaskInput(2).nativeElement;
    expect(secondTaskInput.value).toBe('tache 3');
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


