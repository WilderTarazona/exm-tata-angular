import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TataSessionService } from '../services';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const sessionService = inject(TataSessionService);
  const router = inject(Router);
  console.log('sessionService.isAuthenticated', sessionService.isAuthenticated)
  if (sessionService.isAuthenticated) {
    return true;
  }
  return router.createUrlTree(['/public/sign-in'], {
    queryParams: { returnUrl: state.url },
  });
}