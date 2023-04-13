import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//importamos las clases para trabajjar con firebase


import { FormsModule,ReactiveFormsModule} from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './components/inicio/inicio.component';
import { HomeComponent } from './components/home/home.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MiniSplitComponent } from './components/mini-split/mini-split.component';
import { PrecedentVoyagerComponent } from './components/precedent-voyager/precedent-voyager.component'; // <- import PdfViewerModule
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
 
    HomeComponent,
PrecedentVoyagerComponent,
    MiniSplitComponent,
     PrecedentVoyagerComponent,

   
    
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({}),
    HttpClientModule,
    AppRoutingModule,
  
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    PdfViewerModule
    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
