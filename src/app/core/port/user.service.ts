import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserFirebaseService } from './user-firebase.service';
import { User } from '../entity/user.interface';

@Injectable({
  providedIn: 'root',
  useClass: UserFirebaseService,
})
export abstract class UserService {
  abstract create(user: User, bearerToken: string): Observable<void>;
}
