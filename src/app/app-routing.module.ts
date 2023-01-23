import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


///importamos nuestros componentes

import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';


import { AngularFireAuth } from '@angular/fire/compat/auth';
import { InicioComponent } from './components/inicio/inicio.component';
import { HomeComponent } from './components/home/home.component';
import { R410asplitComponent } from './components/r410asplit/r410asplit.component';
import { AdminComponent } from './components/admin/admin.component';
import { ActualizarPreguntasComponent } from './components/actualizar-preguntas/actualizar-preguntas.component';



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
  component:R410asplitComponent,
 
}, { 
  path: 'admin',
  component:AdminComponent,
 
},{
path: 'actualizar/:id',
component:ActualizarPreguntasComponent,

},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
