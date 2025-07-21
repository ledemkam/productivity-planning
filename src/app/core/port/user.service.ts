import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserFirebaseService } from './user-firebase.service';
import { User } from '../entity/user.interface';

@Injectable({
  providedIn: 'root',
  useClass: UserFirebaseService,
})
export abstract class UserService {
  create(user: User, bearerToken: string): Observable<void> {
    console.log(user, bearerToken);
    return of(undefined);
  }
}
