import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  let adminAccess = window.sessionStorage.getItem("admin"); //fetches admin auth from session storage
  console.log('adminAccess - '+ adminAccess)

  if(adminAccess!== null  && adminAccess!=="false"){
    //allows admin page access
    console.log('adminGuard passed.....')
    return true;
  }else{
    router.navigateByUrl("/"); //returns to home page
    return false;
  }

};
