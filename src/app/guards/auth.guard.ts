import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const authState = false;

  if(authState){
    //redirects to page
    return true;
  }else{
    router.navigateByUrl("/");
    return false;
  }
  //return true; // this will allow page access
  //return false; // this will redirect you to home page
};
