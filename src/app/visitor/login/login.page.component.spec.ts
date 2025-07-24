import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login.page.component';
import { By } from '@angular/platform-browser';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when page loading', () => {
    it('should display email field', () => {
      // Arrange
      const email = fixture.debugElement.query(By.css('[data-testid="email"]'));
      // Act
      // Assert
      expect(email).toBeTruthy();
    });
    it('should display password field', () => {
      // Arrange
      const password = fixture.debugElement.query(
        By.css('[data-testid="password"]'),
      );
      // Act
      // Assert
      expect(password).toBeTruthy();
    });
  });

  describe('when user interact with email field', () => {
    it('should display error message when field is empty', () => {
      // Arrange
      const email = fixture.debugElement.query(By.css('[data-testid="email"]'));

      // Act
      email.nativeElement.value = '';
      email.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      const error = fixture.debugElement.query(
        By.css('[data-testid="error-email-required"]'),
      );
      const errorMessage = error.nativeElement.textContent;

      // Assert
      expect(error).toBeTruthy();
      expect(errorMessage).toContain('Email is required.');
    });
    it('should display error message when field do not contain a valid HTML5 email', () => {
      // Arrange
      const email = fixture.debugElement.query(By.css('[data-testid="email"]'));

      // Act
      email.nativeElement.value = 'invalid-email';
      email.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      const error = fixture.debugElement.query(
        By.css('[data-testid="error-email-pattern"]'),
      );
      const errorMessage = error.nativeElement.textContent;

      // Assert
      expect(error).toBeTruthy();
      expect(errorMessage).toContain('Email must be valid.');
    });
  });

  describe('when user interact with password field', () => {
    it('should display error message when field is empty', () => {
      // Arrange
      const password = fixture.debugElement.query(
        By.css('[data-testid="password"]'),
      );

      // Act
      password.nativeElement.value = '';
      password.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      const error = fixture.debugElement.query(
        By.css('[data-testid="error-password-required"]'),
      );
      const errorMessage = error.nativeElement.textContent;

      // Assert
      expect(error).toBeTruthy();
      expect(errorMessage).toContain('Password is required.');
    });
  });
});
