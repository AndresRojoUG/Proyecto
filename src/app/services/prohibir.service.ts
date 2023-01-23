import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProhibirService implements CanActivate {

  constructor(private service:UserService, private router:Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {

    
    
    // Comparamos la hora con el maximo permitido
    // Esto sería en caso de que no queremos que 
    // pueda entrar a la página después de las 10:00 pm  
    if (this.service.usuarioAutenticado()===true) {
      // Si la hora es mayor o igual redireccionamos al homeComponent
      console.log(this.service.usuarioAutenticado())
      return false;
    }
    this.router.navigate(['/login']);
    console.log(this.service.usuarioAutenticado())
    return true;
  }
 
 
}
