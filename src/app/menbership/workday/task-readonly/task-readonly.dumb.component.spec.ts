import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskReadonlyDumbComponent } from './task-readonly.dumb.component';

describe('TaskReadonlyDumbComponent', () => {
  let component: TaskReadonlyDumbComponent;
  let fixture: ComponentFixture<TaskReadonlyDumbComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskReadonlyDumbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskReadonlyDumbComponent);
    component = fixture.componentInstance;

    // Set required inputs
    //componentRef.setInput('task', mockTask);
    //componentRef.setInput('index', 0);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
