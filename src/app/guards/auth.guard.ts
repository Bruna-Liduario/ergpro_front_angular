import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  console.log('AuthGuard chamado');
  const router = inject(Router);

  if (typeof window !== 'undefined') {
    const token = sessionStorage.getItem('token');

  if (token) {
  console.log('Token encontrado:', token);
  return true;
  }
  }

  router.navigate(['/login']);
  return false;
};


