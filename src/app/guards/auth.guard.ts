import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const allowAccess = window.sessionStorage.getItem("auth-token"); //fetches auth state from session storage

  if(allowAccess){
    //redirects to page
    console.log('authGuard passed.....')
    return true;
  }else{
    router.navigateByUrl("/");
    return false;
  }
  //return true; // this will allow page access
  //return false; // this will redirect you to home page
};
