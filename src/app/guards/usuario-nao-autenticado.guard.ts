import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const usuarioNaoAutenticadoGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (typeof window !== 'undefined') {
    const token = sessionStorage.getItem('token');

  if (token) {
    router.navigate(['/app']);
    return false;
  }
}

  console.log('Acesso permitido à tela de login');
  return true;
};
