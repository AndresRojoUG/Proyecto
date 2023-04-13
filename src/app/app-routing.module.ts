import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




import { InicioComponent } from './components/inicio/inicio.component';
import { HomeComponent } from './components/home/home.component';


import { MiniSplitComponent } from './components/mini-split/mini-split.component';
import { PrecedentVoyagerComponent } from './components/precedent-voyager/precedent-voyager.component';



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
{ 
  path: 'precedent',
  component:PrecedentVoyagerComponent,
 
},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
