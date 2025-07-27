import { TestBed } from '@angular/core/testing';

import { Router } from '@angular/router';

import { RegisterUserUseCase } from './register-user.use-case';
import { AuthenticationService } from '../../../core/port/authentication.service';
import { UserService } from '../../../core/port/user.service';
import { UserStore } from '../../../core/store/user.store';

describe('RegisterUserUseCaseService', () => {
  let service: RegisterUserUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RegisterUserUseCase,
        { provide: AuthenticationService, useValue: { register: jest.fn() } },
        { provide: UserService, useValue: { create: jest.fn() } },
        { provide: UserStore, useValue: { register: jest.fn() } },
        { provide: Router, useValue: { navigate: jest.fn() } },
      ],
    });
    service = TestBed.inject(RegisterUserUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
