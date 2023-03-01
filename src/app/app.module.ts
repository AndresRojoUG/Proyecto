import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//importamos las clases para trabajjar con firebase

import { AngularFireModule} from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

///importamos la configuracion de firebase

import { environment } from 'src/environments/environment';

import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { provideAuth, getAuth } from '@angular/fire/auth';
import { FirebaseApps, initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './components/inicio/inicio.component';
import { HomeComponent } from './components/home/home.component';

import { BitacoraService } from './services/bitacora.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CrearPreguntasService } from './services/crear-preguntas.service';

import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MiniSplitComponent } from './components/mini-split/mini-split.component'; // <- import PdfViewerModule
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
 
    HomeComponent,

    MiniSplitComponent,

   
    
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({}),
    HttpClientModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideAuth(()=>getAuth()),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    PdfViewerModule
    
   
    
  ],
  providers: [BitacoraService,CrearPreguntasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
