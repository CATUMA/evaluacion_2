import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RoutesService } from './routes/routes.service';

export const authGuard: CanActivateFn = (route, state) => {
  const routesService = inject(RoutesService)
  const router = inject(Router)
  const valorSessionStorage = routesService.isLogin()
  if(!!valorSessionStorage){
    return true
  }
  router.navigate(["login"],
    {queryParams: {blockedPage: state.url}})
  return false;
};
