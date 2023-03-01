import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


///importamos nuestros componentes

import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';


import { AngularFireAuth } from '@angular/fire/compat/auth';
import { InicioComponent } from './components/inicio/inicio.component';
import { HomeComponent } from './components/home/home.component';


import { MiniSplitComponent } from './components/mini-split/mini-split.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  {
    path: 'inicio',
    component:InicioComponent,
   
  },
  {
    path: 'home',
    component:HomeComponent,
   
  },
  { 
  path: 'R410asplit',
  component:MiniSplitComponent,
 
},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
