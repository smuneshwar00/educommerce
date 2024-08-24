import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  return true; // this will allow page access
  //return false; // this will redirect you to home page
};
