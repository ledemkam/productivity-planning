import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login.page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when page loading',() => {
    it.todo('shoul display email field')
    it.todo('should display password field')
  })

  describe('when user interact with email field', () => {
    it.todo('should display error message when field is empty');
    // () => {
    //   email.nativeElement.value = '';
    //   email.nativeElement.dispatchEvent(new Event('input'));
    //   fixture.detectChanges();

    //   const error = fixture.debugElement.query(
    //     By.css('[data-testid="error-email-required"]'),
    //   );
    //   const errorMessage = error.nativeElement.textContent;

    //   expect(errorMessage).toContain('Email is required.');

    it.todo('should display error message when field do not contain a valid HTML5 email');
      //() => {
      // email.nativeElement.value = 'invalid-email';
      // email.nativeElement.dispatchEvent(new Event('input'));
      // fixture.detectChanges();

      // const error = fixture.debugElement.query(
      //   By.css('[data-testid="error-email-pattern"]'),
      // );
      // const errorMessage = error.nativeElement.textContent;

      // expect(errorMessage).toContain('Email must be valid.');
    });


  describe('when user interact with password field', () => {
    it.todo('should display error message when field is empty')
    // () => {
      // password.nativeElement.value = '';
      // password.nativeElement.dispatchEvent(new Event('input'));
      // fixture.detectChanges();

      // const error = fixture.debugElement.query(
      //   By.css('[data-testid="error-password-required"]'),
      // );
      // const errorMessage = error.nativeElement.textContent;

      // expect(errorMessage).toContain('Password is required.');
    });
  });


