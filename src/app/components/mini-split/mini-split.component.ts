import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import * as FileSaver from 'file-saver';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { url } from 'node:inspector';
import {  Capacitor } from '@capacitor/core';


import {Directory, Encoding, FilesystemDirectory, FilesystemEncoding } from '@capacitor/filesystem';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';




@Component({
  selector: 'app-mini-split',
  templateUrl: './mini-split.component.html',
  styleUrls: ['./mini-split.component.css']
})
export class MiniSplitComponent implements OnInit {

  ////MANTENIMIENTO  MINISPLT

  mantenimiento = true;
  mantenimiento_tipo_mini_split_muro_alto = true;
  mantenimiento_modelo2 = true;
  mantenimiento_modelo3 = true;
  mantenimiento_modelo4 = true;
  escoger_modelo_mantenimiento = false;
  reparacion = true;
  //MANTENIMIENTO MINISPLIT TIPO MURO ALTO
  formLogin: FormGroup;
  formDiagrama: FormGroup;
  formDestello: FormGroup;
  start = 0;
  transform = 'scale(1)';
  posicionn = 0
  pagina = 1;
  paso2 = true;
  paso3 = true;
  paso4 = true;
  paso5 = true;
  paso6 = true;
  paso7 = true;
  paso8 = true;
  paso9 = true;
  paso10 = true;
  paso11 = true;
  paso12 = true;
  paso13 = true;
  paso14 = true;
  paso15 = true;
  paso16 = true;
  paso17 = true;
  paso18 = true;
  paso19 = true;
  paso20 = true;
  paso21 = true;
  paso22 = true;
  paso23 = true;
  paso24 = true;

  fecha_modelo1 = true;
  botonMantenimiento = true;
  zoomPdf=1
  serpentin


  archivo
  diagnostico=true;
  backgroundColor='rgba(12, 12, 12, 0.479)'
  zoom
  color=' #fff'
  backgroundColorlib='rgba(12, 12, 12, 0.479)'
  zoomlib
  colorlib=' #fff'
  backgroundColorReq='rgba(12, 12, 12, 0.479)'
  colorReq=' #fff'
  formCodigo: FormGroup;
  errorF1=true;
  errorF2=true;
  errorF3=true;
  errorF4=true;
  errorF5=true;
  errorE1=true;
  errorE2=true;
  errorE3=true;
  errorE4=true;
  errorE5=true;
  errorH6=true;
  errorC5=true;
  errorH4=true;
  errorH3=true;
  errorH5=true;

  paso2E1si=true;
  paso2E1no=true;
  paso3E1si=true;
  paso3E1no=true;
  paso4E1si=true;
  paso4E1no=true;
  paso5E1si=true;
  paso5E1no=true;
  paso6E1si=true;
  paso6E1no=true;
  paso7E1si=true;
  paso7E1no=true;
  paso8E1si=true;
  paso8E1no=true;
  paso9E1si=true;
  paso9E1no=true;
  paso10E1si=true;
  paso10E1no=true;
  paso11E1si=true;
  paso11E1no=true;
  paso12E1si=true;
  paso12E1no=true;
  paso13E1si=true;
  paso13E1no=true;
  resuelto=true;

  archivoPdfS;
  loader=false;
  errorE6= true;
  checkbox1 = false;
  checkbox2 = false;
  destelloEscogido=true;
  codigoEscogido=true;
  alertCtrl: any;
  @ViewChild('table', {static: false}) table: ElementRef;

  
  constructor(
    public formBuilder: FormBuilder,
   
    private router: Router,
    private toast: ToastrService
    , private modal: NgbModal,
    private location: Location,
    private http: HttpClient,
    private platform: Platform, private alertController: AlertController
    
  ) {
   
    this.formCodigo=this.formBuilder.group({
      codigo:['']
    })

    this.formDestello=this.formBuilder.group({
      ledRed:[''],
      ledYellow:[''],
      ledGreen:['']
    })
    
    this.formDiagrama=this.formBuilder.group({
      paso1E1sicheck:[''],
      paso1E1nocheck:[''],
      paso2E1sicheck:[''],
      paso2E1nocheck:['']
    })
    
    this.formLogin = this.formBuilder.group({


      paso1check: [''],
      paso2check: [''],
      paso3check: [''],
      paso4check: [''],
      paso5check: [''],
      paso6check: [''],
      paso7check: [''],
      paso8check: [''],
      paso9check: [''],
      paso10check: [''],
      paso11check: [''],
      paso12check: [''],
      paso13check: [''],
      paso14check: [''],
      paso15check: [''],
      paso16check: [''],
   
      paso18check: [''],
      paso19check: [''],
      paso20check: [''],
      paso21check: [''],
      paso22check: [''],
      paso23check: [''],
      paso24heck: [''],
      fecha: [],
      posicion: [''],

    })

   }

  ngOnInit(): void {
    window.onload = () => {
      this.location.back();
    };
    setTimeout(() => {
      this.loader=true
    }, 7000);

   
  }

  

  ionViewDidEnter() {
    this.platform.backButton.subscribeWithPriority(9999, () => {
      this.presentAlertConfirm();
    });
  }
  
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Está seguro que desea cerrar la aplicación?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {}
        }, {
          text: 'Salir',
          handler: () => {
            navigator['app'].backHistory();
          }
        }
      ]
    });
  
    await alert.present();
  }

  async download(fileName) {
   
  if(window.confirm('Quieres abrir el archivo en el navegador?')){
  

  let urls = fileName;
  const fileNamess = urls.substring(urls.lastIndexOf('/') + 1);
  window.open(`../../../assets/diagramas_errores/${fileNamess}`,'__blank');
}
  }

 
  
  mostrarMantenimiento() {
    this.mantenimiento = false
    this.reparacion = true
    this.toast.info('Mantenimiento', 'ESCOGIO:')
    this.diagnostico=true;
this.formCodigo=this.formBuilder.group({
  codigo:['']
})
this.cerrarCodigos();
    this.mantenimiento_tipo_mini_split_muro_alto = true;
    this.mantenimiento_modelo2 = true;
    this.mantenimiento_modelo3 = true;
    this.mantenimiento_modelo4 = true;
    this.escoger_modelo_mantenimiento = false;
    this.formLogin.reset()
    this.mostrarSiguiente('cerrar')
  }
  mostrarDiagnostico(){
    this.diagnostico=false
    this.mantenimiento = true
    this.reparacion = true
    this.mostrarSiguiente('cerrar')
    this.toast.info('Diagnostico', 'ESCOGIO:',)
    this.formLogin.reset()
  }
  mostrarReparacion() {
    this.formCodigo=this.formBuilder.group({
      codigo:['']
    })
    this.cerrarCodigos();
    this.mantenimiento = true
    this.diagnostico=true;
    this.reparacion = false
  
    this.mostrarSiguiente('cerrar')
    this.toast.info('Reparación', 'ESCOGIO:',)
    this.formLogin.reset()


  }

  mostrarSiguiente(paso: string) {
    switch (paso) {
      case 'paso2':
        this.paso2 = false;
        break;
      case 'paso3':
        this.paso3 = false;
        break;
      case 'paso4':
        this.paso4 = false;
        break;
      case 'paso5':
        this.paso5 = false;
        break;
      case 'paso6':
        this.paso6 = false;
        break;
      case 'paso7':
        this.paso7 = false;
        break;
      case 'paso8':
        this.paso8 = false;
        break;
      case 'paso9':
        this.paso9 = false;
        break;
      case 'paso10':
        this.paso10 = false;
        break;
      case 'paso11':
        this.paso11 = false;
        break;
      case 'paso12':
        this.paso12 = false;
        break;
      case 'paso13':
        this.paso13 = false;
        break;
      case 'paso14':
        this.paso14 = false;
        break;
      case 'paso15':
        this.paso15 = false;
        break;
      case 'paso16':
        this.paso16 = false;
        break;
     
      case 'paso18':
        this.paso18 = false;
        break;
      case 'paso19':
        this.paso19 = false;
        break;
      case 'paso20':
        this.paso20 = false;
        break;
      case 'paso21':
        this.paso21 = false;
        break;
      case 'paso22':
        this.paso22 = false;
        break;
      case 'paso23':
        this.paso23 = false;
        break;
      case 'paso24':
        this.paso24 = false;
        break;
      case 'botonMantenimiento':
        this.botonMantenimiento = false;
        break;
      case 'fecha_modelo1':
        this.fecha_modelo1 = false;
        break;

      default:
        this.paso2 = true;
        this.paso3 = true
        this.paso4 = true
        this.paso5 = true
        this.paso6 = true
        this.paso7 = true
        this.paso8 = true
        this.paso9 = true
        this.paso10 = true
        this.paso11 = true
        this.paso12 = true
        this.paso13 = true
        this.paso14 = true
        this.paso15 = true
        this.paso16 = true
        this.paso17 = true
        this.paso18 = true
        this.paso19 = true
        this.paso20 = true
        this.paso21 = true
        this.paso22 = true
        this.paso23 = true
        this.paso24 = true
        this.fecha_modelo1 = true;
        this.botonMantenimiento = true;
    }
  }

  paso1(nombre: string) {

    window.open('../../../assets/equipos/' + nombre, 'ayuda', 'width=900,height=550');

  }

  agregarNuevaBitacora() {



    try {
      /*
          this.formLogin.get("posicion").setValue(this.posicionn=this.bitacora.length+1);
          this.bitacoraService.createPost(this.formLogin.value)
         console.log(this.posicionn)
         console.log(this.formLogin.value)
         this.toast.success('Datos guardados correctamente','CORRECTO!!!',)
         
         this.formLogin = this.formBuilder.group({
        
          paso1:[''],
          paso2: [''],
          paso3:[''],
          paso1check: [''],
          paso2check: [''],
          paso3check: [''],
          fecha: [],
          posicion:[''],
          
        })*/


      console.log(this.formLogin.value)


    } catch (e) {
      console.log(e)
      this.toast.error('Datos no guardados', 'ERROR!!!',)
    }



  }
  /*
  paginatioNext(name: string) {

    switch (name) {
      case 'siguiente':

        if (this.start >= this.bitacora.length) {
          return
        } else {
          this.start = this.start + 5;
          this.pagina += 1
        }

        break;
      case 'regresa':
        if (this.start === 0) {
          return
        } else {
          this.start = this.start - 5
          this.pagina -= 1
        }
    }
  }*/
  openXL(contenido, arc) {
    console.log('jjjjjjj')
    this.archivo = arc;
    this.modal.open(contenido, { centered: true, size: 'xl' });
  }
  openMD(contenido, arc) {

    this.archivo = arc;
    this.modal.open(contenido, { centered: true, size: 'md' });
  }

  openModelos(contenidoModelo) {
    this.modal.open(contenidoModelo, { centered: true, size: 'sm', animation: true, backdrop: true });

  }

  modeloMantenimiento(modelo) {
    console.log(modelo)
    switch (modelo) {
      case 'mantenimiento_modelo1':

        this.mantenimiento_tipo_mini_split_muro_alto = false;
        this.modal.dismissAll()
        this.escoger_modelo_mantenimiento = true;
        break

      case 'mantenimiento_modelo2':

        this.mantenimiento_modelo2 = false;
        this.modal.dismissAll()
        this.escoger_modelo_mantenimiento = true;
        break
      case 'mantenimiento_modelo3':

        this.mantenimiento_modelo3 = false;
        this.modal.dismissAll()
        this.escoger_modelo_mantenimiento = true;
        break
      case 'mantenimiento_modelo4':

        this.mantenimiento_modelo4 = false;
        this.modal.dismissAll()
        this.escoger_modelo_mantenimiento = true;
        break
    }
  }


  cambiartransparencia(cambio){
    switch (cambio){
      case 'cambiar':
    
        this.backgroundColor='rgba(12, 12, 12, 0)'
        this.zoom= 'sacale(1.8)'
        this.color='black'
      break;
      case 'regresar':
     
        this.backgroundColor= 'rgba(12, 12, 12, 0.479)';
        this.zoom= 'sacale(1)'
        this.color='#fff'
      break;
      case 'cambiarlib':
  
        this.backgroundColorlib='rgba(12, 12, 12, 0)'
        this.zoomlib= 'sacale(1.8)'
        this.colorlib='black'
      break;
      case 'regresarlib':
       
        this.backgroundColorlib= 'rgba(12, 12, 12, 0.479)';
        this.zoomlib= 'sacale(1)'
        this.colorlib='#fff'
      break;
      case 'cambiarReq':
  
        this.backgroundColorReq='rgba(12, 12, 12, 0)'
      
        this.colorReq='black'
      break;
      case 'regresarReq':
      
        this.backgroundColorReq= 'rgba(12, 12, 12, 0.479)';
       
        this.colorReq='#fff'
      break;
    }
 
  }
  
 

  toggleZoom() {
    this.transform = this.transform === 'scale(1)' ? 'scale(2)' : 'scale(1)';
  }




  buscarError(){
    let codigo=this.formCodigo.value['codigo'].toUpperCase()
    
    
    console.log(this.formCodigo.value['codigo'])

  
    switch (codigo){
      case 'F1':
        this.errorE6=true
        this.errorE5=true
        this.errorE2=true
        this.errorE3=true
        this.errorF1=false
        this.errorF2=true
        this.errorE1=true
        this.errorF3=true;
        this.errorF4=true;
        this.errorF5=true;
        this.errorE4=true;
        this.errorH6=true;
        this.errorH3=true;
        this.errorH4=true;
        this.errorH5=true;
        this.errorC5=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;
      case 'F2':
        this.errorE6=true
        this.errorE5=true
        this.errorE4=true;
        this.errorE2=true
        this.errorE3=true
        this.errorF2=false
        this.errorF1=true
        this.errorE1=true
        this.errorF3=true;
        this.errorF4=true;
        this.errorH3=true;
        this.errorH4=true;
        this.errorH5=true;
        this.errorF5=true;
        this.errorH6=true;  
         this.errorC5=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;
      case 'F3':
        this.errorE6=true
        this.errorE5=true
        this.errorE4=true;
        this.errorE2=true
        this.errorE3=true
        this.errorF3=false;
        this.errorF1=true
        this.errorF2=true
        this.errorF4=true;
        this.errorH3=true;
        this.errorH4=true;
        this.errorH5=true;
        this.errorF5=true;
        this.errorE1=true
        this.errorH6=true;
        this.errorC5=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;
      case 'F4':
        this.errorE6=true
        this.errorE5=true
        this.errorE4=true;
        this.errorE2=true
        this.errorE3=true
        this.errorF4=false;
        this.errorF3=true;
        this.errorH6=true;
        this.errorH3=true;
        this.errorH4=true;
        this.errorH5=true;
        this.errorF1=true
        this.errorF2=true
        this.errorF5=true;
        this.errorE1=true
        this.errorC5=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;
      case 'F5':
        this.errorE6=true
        this.errorE5=true
        this.errorE4=true;
        this.errorE2=true
        this.errorE3=true
        this.errorF5=false;
        this.errorF4=true;
        this.errorF3=true;
        this.errorF1=true
        this.errorH3=true;
        this.errorH4=true;
        this.errorH5=true;
        this.errorF2=true
        this.errorH6=true;
        this.errorE1=true
         this.errorC5=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;
      case 'E1':
        this.errorE6=true
        this.errorE5=true
        this.errorE4=true;
        this.errorE2=true
        this.errorE3=true
        this.errorE1=false
        this.errorF2=true
        this.errorF4=true;
        this.errorF1=true
        this.errorF3=true;
        this.errorF5=true;
        this.errorH3=true;
        this.errorH4=true;
        this.errorH5=true;
        this.errorC5=true;
        this.errorH6=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;
      case 'E2':
        this.errorE6=true
        this.errorE5=true
        this.errorE4=true;
        this.errorE2=false
        this.errorE3=true
        this.errorE1=true
        this.errorF2=true;
        this.errorH3=true;
        this.errorH4=true;
        this.errorH5=true;
        this.errorF4=true;
        this.errorF1=true
        this.errorF3=true;
        this.errorF5=true;
        this.errorH6=true;
        this.errorC5=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;
      case 'E3':
        this.errorE6=true
        this.errorE5=true
        this.errorE4=true;
        this.errorE3=false
        this.errorE2=true
        this.errorE1=true
        this.errorF2=true
        this.errorF4=true;
        this.errorH3=true;
        this.errorH4=true;
        this.errorH5=true;
        this.errorF1=true
        this.errorF3=true;
        this.errorF5=true;
        this.errorH6=true;
        this.errorC5=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;
      case 'E4':
        this.errorE6=true
        this.errorE5=true
        this.errorH3=true;
        this.errorH4=true;
        this.errorH5=true;
        this.errorE4=false
        this.errorE3=true
        this.errorE2=true
        this.errorE1=true
        this.errorF2=true
        this.errorF4=true;
        this.errorF1=true
        this.errorC5=true;
        this.errorF3=true;
        this.errorF5=true;
        this.errorH6=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;
      case 'E5':
        this.errorE6=true
        this.errorE5=false
        this.errorE4=true
        this.errorE3=true
        this.errorE2=true
        this.errorE1=true
        this.errorF2=true
        this.errorF4=true;
        this.errorF1=true
        this.errorF3=true;
        this.errorF5=true;
        this.errorH3=true;
        this.errorH4=true;
        this.errorH5=true;
        this.errorH6=true;
        this.errorC5=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;
      case 'E6':
        this.errorE6=false
        this.errorE5=true
        this.errorE4=true
        this.errorE3=true
        this.errorE2=true
        this.errorE1=true
        this.errorF2=true
        this.errorF4=true;
        this.errorF1=true
        this.errorF3=true;
        this.errorH3=true;
        this.errorH4=true;
        this.errorH5=true;
        this.errorF5=true;
        this.errorH6=true;
        this.errorC5=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;
      case 'H6':
        this.errorH6=false;
        this.errorE6=true
        this.errorE5=true
        this.errorE4=true
        this.errorE3=true
        this.errorE2=true
        this.errorE1=true
        this.errorF2=true
        this.errorF4=true;
        this.errorH3=true;
        this.errorH4=true;
        this.errorH5=true;
        this.errorF1=true
        this.errorF3=true;
        this.errorF5=true;
        this.errorC5=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;
      case 'C5':
        this.errorC5=false;
        this.errorH6=true;
        this.errorH3=true;
        this.errorH4=true;
        this.errorH5=true;
        this.errorE6=true
        this.errorE5=true
        this.errorE4=true
        this.errorE3=true
        this.errorE2=true
        this.errorE1=true
        this.errorF2=true
        this.errorF4=true;
        this.errorF1=true
        this.errorF3=true;
        this.errorF5=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;
      case 'H3':
        this.errorH3=false;
        this.errorH4=true;
        this.errorH5=true;
        this.errorC5=true;
        this.errorH6=true;
        this.errorE6=true
        this.errorE5=true
        this.errorE4=true
        this.errorE3=true
        this.errorE2=true
        this.errorE1=true
        this.errorF2=true
        this.errorF4=true;
        this.errorF1=true
        this.errorF3=true;
        this.errorF5=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;
      case 'H4':
        this.errorH3=true;
        this.errorH4=false;
        this.errorH5=true;
        this.errorC5=true;
        this.errorH6=true;
        this.errorE6=true
        this.errorE5=true
        this.errorE4=true
        this.errorE3=true
        this.errorE2=true
        this.errorE1=true
        this.errorF2=true
        this.errorF4=true;
        this.errorF1=true
        this.errorF3=true;
        this.errorF5=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;
      case 'H5':
        this.errorH3=true;
        this.errorH4=true;
        this.errorH5=false;
        this.errorC5=true;
        this.errorH6=true;
        this.errorE6=true
        this.errorE5=true
        this.errorE4=true
        this.errorE3=true
        this.errorE2=true
        this.errorE1=true
        this.errorF2=true
        this.errorF4=true;
        this.errorF1=true
        this.errorF3=true;
        this.errorF5=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;

      default:
        this.errorH3=true;
        this.errorH4=true;
        this.errorH5=true;
        this.errorC5=true;
        this.errorH6=true;
        this.errorE6=true
        this.errorE5=true
        this.errorE4=true;
        this.errorE1=true
        this.errorE2=true
        this.errorE3=true
        this.errorF1=true;
        this.errorF2=true;
        this.errorF3=true;
        this.errorF4=true;
        this.errorF5=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;
    }
  }


  
  buscarErrorLed2(){
    let codigo=this.formDestello.value['ledGreen'].toUpperCase()
    
    
    

  
    switch (codigo){
  
      case '1':
        this.errorE6=true
        this.errorE5=true
        this.errorE4=true;
        this.errorE2=true
        this.errorE3=true
        this.errorE1=false
        this.errorF2=true
        this.errorF4=true;
        this.errorF1=true
        this.errorF3=true;
        this.errorF5=true;
        this.errorH3=true;
        this.errorH4=true;
        this.errorH5=true;
        this.errorC5=true;
        this.errorH6=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;
      case '2':
        this.errorE6=true
        this.errorE5=true
        this.errorE4=true;
        this.errorE2=false
        this.errorE3=true
        this.errorE1=true
        this.errorF2=true;
        this.errorH3=true;
        this.errorH4=true;
        this.errorH5=true;
        this.errorF4=true;
        this.errorF1=true
        this.errorF3=true;
        this.errorF5=true;
        this.errorH6=true;
        this.errorC5=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;
     
      case '4':
        this.errorE6=true
        this.errorE5=true
        this.errorH3=true;
        this.errorH4=true;
        this.errorH5=true;
        this.errorE4=false
        this.errorE3=true
        this.errorE2=true
        this.errorE1=true
        this.errorF2=true
        this.errorF4=true;
        this.errorF1=true
        this.errorC5=true;
        this.errorF3=true;
        this.errorF5=true;
        this.errorH6=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;
      case '5':
        this.errorE6=true
        this.errorE5=false
        this.errorE4=true
        this.errorE3=true
        this.errorE2=true
        this.errorE1=true
        this.errorF2=true
        this.errorF4=true;
        this.errorF1=true
        this.errorF3=true;
        this.errorF5=true;
        this.errorH3=true;
        this.errorH4=true;
        this.errorH5=true;
        this.errorH6=true;
        this.errorC5=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;
      case '6':
        this.errorE6=false
        this.errorE5=true
        this.errorE4=true
        this.errorE3=true
        this.errorE2=true
        this.errorE1=true
        this.errorF2=true
        this.errorF4=true;
        this.errorF1=true
        this.errorF3=true;
        this.errorH3=true;
        this.errorH4=true;
        this.errorH5=true;
        this.errorF5=true;
        this.errorH6=true;
        this.errorC5=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;
     
      default:
        this.errorH3=true;
        this.errorH4=true;
        this.errorH5=true;
        this.errorC5=true;
        this.errorH6=true;
        this.errorE6=true
        this.errorE5=true
        this.errorE4=true;
        this.errorE1=true
        this.errorE2=true
        this.errorE3=true
        this.errorF1=true;
        this.errorF2=true;
        this.errorF3=true;
        this.errorF4=true;
        this.errorF5=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;
    }
  }



  
  buscarErrorLed(){
    let codigo;


    if(this.formDestello.value['ledRed']!= ''){
      codigo=this.formDestello.value['ledRed']+'R'
    }else if(this.formDestello.value['ledYellow']!= ''){
      codigo=this.formDestello.value['ledYellow']+'Y'
    }else if(this.formDestello.value['ledGreen']!= ''|| this.formDestello.value['ledGreen']=='OFF'  ){
      codigo=this.formDestello.value['ledGreen']+'G'
    }
    console.log(codigo)

  
    switch (codigo){
     
      case '5R':
        this.errorE6=true
        this.errorE5=true
        this.errorE4=true;
        this.errorE2=true
        this.errorE3=true
        this.errorF3=false;
        this.errorF1=true
        this.errorF2=true
        this.errorF4=true;
        this.errorH3=true;
        this.errorH4=true;
        this.errorH5=true;
        this.errorF5=true;
        this.errorE1=true
        this.errorH6=true;
        this.errorC5=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;
      case '6R':
        this.errorE6=true
        this.errorE5=true
        this.errorE4=true;
        this.errorE2=true
        this.errorE3=true
        this.errorF4=false;
        this.errorF3=true;
        this.errorH6=true;
        this.errorH3=true;
        this.errorH4=true;
        this.errorH5=true;
        this.errorF1=true
        this.errorF2=true
        this.errorF5=true;
        this.errorE1=true
        this.errorC5=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;
      case '7Y':
        this.errorE6=true
        this.errorE5=true
        this.errorE4=true;
        this.errorE2=true
        this.errorE3=true
        this.errorF5=false;
        this.errorF4=true;
        this.errorF3=true;
        this.errorF1=true
        this.errorH3=true;
        this.errorH4=true;
        this.errorH5=true;
        this.errorF2=true
        this.errorH6=true;
        this.errorE1=true
         this.errorC5=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;
     
      case '3Y':
        this.errorE6=true
        this.errorE5=true
        this.errorE4=true;
        this.errorE2=false
        this.errorE3=true
        this.errorE1=true
        this.errorF2=true;
        this.errorH3=true;
        this.errorH4=true;
        this.errorH5=true;
        this.errorF4=true;
        this.errorF1=true
        this.errorF3=true;
        this.errorF5=true;
        this.errorH6=true;
        this.errorC5=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;
      
      case '7Y':
        this.errorE6=true
        this.errorE5=true
        this.errorH3=true;
        this.errorH4=true;
        this.errorH5=true;
        this.errorE4=false
        this.errorE3=true
        this.errorE2=true
        this.errorE1=true
        this.errorF2=true
        this.errorF4=true;
        this.errorF1=true
        this.errorC5=true;
        this.errorF3=true;
        this.errorF5=true;
        this.errorH6=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;
      case '5Y':
        this.errorE6=true
        this.errorE5=false
        this.errorE4=true
        this.errorE3=true
        this.errorE2=true
        this.errorE1=true
        this.errorF2=true
        this.errorF4=true;
        this.errorF1=true
        this.errorF3=true;
        this.errorF5=true;
        this.errorH3=true;
        this.errorH4=true;
        this.errorH5=true;
        this.errorH6=true;
        this.errorC5=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;
      case 'OFfG':
        this.errorE6=false
        this.errorE5=true
        this.errorE4=true
        this.errorE3=true
        this.errorE2=true
        this.errorE1=true
        this.errorF2=true
        this.errorF4=true;
        this.errorF1=true
        this.errorF3=true;
        this.errorH3=true;
        this.errorH4=true;
        this.errorH5=true;
        this.errorF5=true;
        this.errorH6=true;
        this.errorC5=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;
     
      case '8Y':
        this.errorH3=false;
        this.errorH4=true;
        this.errorH5=true;
        this.errorC5=true;
        this.errorH6=true;
        this.errorE6=true
        this.errorE5=true
        this.errorE4=true
        this.errorE3=true
        this.errorE2=true
        this.errorE1=true
        this.errorF2=true
        this.errorF4=true;
        this.errorF1=true
        this.errorF3=true;
        this.errorF5=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;
      case '9R':
        this.errorH3=false;
        this.errorH4=true;
        this.errorH5=true;
        this.errorC5=true;
        this.errorH6=true;
        this.errorE6=true
        this.errorE5=true
        this.errorE4=true
        this.errorE3=true
        this.errorE2=true
        this.errorE1=true
        this.errorF2=true
        this.errorF4=true;
        this.errorF1=true
        this.errorF3=true;
        this.errorF5=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;
      case '6Y':
        this.errorH3=true;
        this.errorH4=false;
        this.errorH5=true;
        this.errorC5=true;
        this.errorH6=true;
        this.errorE6=true
        this.errorE5=true
        this.errorE4=true
        this.errorE3=true
        this.errorE2=true
        this.errorE1=true
        this.errorF2=true
        this.errorF4=true;
        this.errorF1=true
        this.errorF3=true;
        this.errorF5=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;
      case '4Y':
        this.errorH3=true;
        this.errorH4=true;
        this.errorH5=false;
        this.errorC5=true;
        this.errorH6=true;
        this.errorE6=true
        this.errorE5=true
        this.errorE4=true
        this.errorE3=true
        this.errorE2=true
        this.errorE1=true
        this.errorF2=true
        this.errorF4=true;
        this.errorF1=true
        this.errorF3=true;
        this.errorF5=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;

      default:
        this.errorH3=true;
        this.errorH4=true;
        this.errorH5=true;
        this.errorC5=true;
        this.errorH6=true;
        this.errorE6=true
        this.errorE5=true
        this.errorE4=true;
        this.errorE1=true
        this.errorE2=true
        this.errorE3=true
        this.errorF1=true;
        this.errorF2=true;
        this.errorF3=true;
        this.errorF4=true;
        this.errorF5=true;
        this.formDiagrama.reset()
        this.mostrarPasoSiguiuente('otro')
      break;
    }
  }



  cerrarCodigos(){
    this.formCodigo.value['codigo']='codigon'
    this.buscarError();
    this.mostrarPasoSiguiuente('cerrar');
  }

  mostrarPasoSiguiuente(paso){

    switch (paso){
      case 'paso2E1si':
        this.paso2E1si=false;
        this.paso2E1no=true;
        this.resuelto=true;
      break;
      case 'paso2E1no':
        this.paso2E1no=false;
        this.paso2E1si=true;
  
      break;
      case 'paso3E1si':
        this.paso3E1si=false;
        this.paso3E1no=true;
        this.resuelto=true;
      break;
      case 'paso3E1no':
        this.paso3E1si=true;
        this.paso3E1no=false;
      break;
      case 'paso4E1si':
        this.paso4E1no=true;
        this.paso4E1si=false
      break;
      case 'paso4E1no':
     this.paso4E1no=false;
     this.paso4E1si=true
      break;
      case 'paso5E1si':
        this.paso5E1no=true;
        this.paso5E1si=false
      break;
      case 'paso5E1no':
      this.paso5E1no=false;
      this.paso5E1si=true
      break;
      case 'paso6E1si':
        this.paso6E1no=true;
        this.paso6E1si=false
      break;
      case 'paso6E1no':
      this.paso6E1no=false;
      this.paso6E1si=true
      break;
      case 'paso7E1si':
        this.paso7E1no=true;
        this.paso7E1si=false
      break;
      case 'paso7E1no':
      this.paso7E1no=false;
      this.paso7E1si=true
      break;
      case 'paso8E1si':
        this.paso8E1no=true;
        this.paso8E1si=false
      break;
      case 'paso8E1no':
      this.paso8E1no=false;
      this.paso8E1si=true
      break;
      case 'paso9E1si':
        this.paso9E1no=true;
        this.paso9E1si=false
      break;
      case 'paso9E1no':
      this.paso9E1no=false;
      this.paso9E1si=true
      break;
      case 'paso10E1si':
        this.paso10E1no=true;
        this.paso10E1si=false
      break;
      case 'paso10E1no':
      this.paso10E1no=false;
      this.paso10E1si=true
      break;
      case 'paso11E1si':
        this.paso11E1no=true;
        this.paso11E1si=false
      break;
      case 'paso11E1no':
      this.paso11E1no=false;
      this.paso11E1si=true
      break;
      case 'paso12E1si':
        this.paso12E1no=true;
        this.paso12E1si=false
      break;
      case 'paso12E1no':
      this.paso12E1no=false;
      this.paso12E1si=true
      break;
      case 'paso13E1si':
        this.paso13E1no=true;
        this.paso13E1si=false
      break;
      case 'paso13E1no':
      this.paso13E1no=false;
      this.paso13E1si=true
      break;
      case 'resuelto':
        this.resuelto=false;
       
      break;
      default:
        this.paso6E1no=true;
        this.paso6E1si=true
        this.paso10E1no=true;
        this.paso10E1si=true
        this.paso13E1no=true;
        this.paso13E1si=true
        this.paso11E1no=true;
        this.paso11E1si=true
        this.paso12E1no=true;
        this.paso12E1si=true
        this.paso9E1no=true;
        this.paso9E1si=true
        this.paso8E1no=true;
        this.paso8E1si=true
        this.paso7E1no=true;
        this.paso7E1si=true
        this.paso5E1no=true;
        this.paso5E1si=true
        this.paso4E1no=true;
        this.paso4E1si=true
        this.paso3E1si=true;
        this.paso3E1no=true;
        this.paso2E1si=true;
        this.paso2E1no=true;
        this.resuelto=true;
      break;
     
    }
  }



  manuales(contenidoPdf){
    this.modal.open(contenidoPdf, { centered: true, size: 'sm', animation: true, backdrop: true })
  }

  archivoPdf(contenidoPdfSeleccionado,arc){
    this.archivoPdfS=arc;
    console.log(this.archivoPdfS)
    this.modal.open(contenidoPdfSeleccionado, { centered: true, size: 'xl', animation: true, backdrop: true })
  }


  // Función para desmarcar checkbox2 al hacer clic en checkbox1
  onCheckbox1Click() {
   
      this.checkbox2 = false;
      this.destelloEscogido=true;
      this.codigoEscogido=false;

    
  }

  // Función para desmarcar checkbox1 al hacer clic en checkbox2
  onCheckbox2Click() {
   
      this.checkbox1 = false;
      this.destelloEscogido=false;
      this.codigoEscogido=true;
    
  }
menosZoom(){
  this.zoomPdf -=0.5;
}
masZoom(){
  this.zoomPdf +=0.5;
}
}
