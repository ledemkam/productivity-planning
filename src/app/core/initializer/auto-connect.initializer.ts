import { concatMap, Observable, tap } from 'rxjs';
import { AuthenticationService } from '../port/authentication.service';
import { UserService } from '../port/user.service';
import { UserStore } from '../store/user.store';


export function initializeAutoConnectFactory(
  authenticationService: AuthenticationService,
  userService: UserService,
  userStore: UserStore,
): () => Observable<void> {
  return () =>
    new Observable<void>((observer) => {
      const refreshToken = localStorage.getItem('jwtRefreshToken');

      if (!refreshToken) {
        observer.complete();
        return;
      }

      authenticationService
        .refreshToken(refreshToken)
        .pipe(
          tap(({ jwtToken }) => {
            localStorage.setItem('jwtToken', jwtToken);
          }),
          concatMap(({ userId, jwtToken }) =>
            userService.fetch(userId, jwtToken),
          ),
        )
        .subscribe({
          next: (user) => {
            userStore.load(user);
            observer.complete();
          },
          error: () => {
            observer.complete();
          },
        });
    });
}
