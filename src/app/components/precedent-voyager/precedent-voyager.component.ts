import { Component, OnInit,ElementRef  } from '@angular/core';
import { Location } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-precedent-voyager',
  templateUrl: './precedent-voyager.component.html',
  styleUrls: ['./precedent-voyager.component.css']
})
export class PrecedentVoyagerComponent implements OnInit {
  loader=false;
  archivo
  archivoPdfS;
  introduccion=true;
  service_fact=true;
  zoomLevel: number = 1;
  tamano=100;
  zoomPdf=1
  com_scroll=true;
  seleccio_voyager=true;
  diagnostico_compresor=true;
  fundamentos=true;
  progressValue: number = 0;
  paso1=false;
  paso2=false;
  paso3=false;
  paso4=false;
  paso5=false;
  paso6=false;
  paso7=false;
  paso8=false;
  paso9=false;
  paso10=false;
  paso11=false;
  paso12=false;
  paso13=false;
  paso14=false;
  paso15=false;

  manten_precedent=true;
  constructor( private location: Location,
                private elementRef: ElementRef, 
                private modal: NgbModal) { }

  ngOnInit(): void {
    window.onload = () => {
      this.location.back();
    };
    setTimeout(() => {
      this.loader=true
    }, 7000);
  }


  scrollToElement(elementId: string): void {
    const element = this.elementRef.nativeElement.querySelector('#' + elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  openXL(contenido, arc) {
    console.log('jjjjjjj')
    this.archivo = arc;
    this.modal.open(contenido, { centered: true, size: 'xl' });
  }
  openMd(contenidoTablas) {

    this.modal.open(contenidoTablas, { centered: true, size: 'sm' });
  }
  pasoNombre(nombre){
    switch(nombre){

      case 'introduccion':
      this.introduccion=false;
      this.service_fact=true;
      break;
      case 'service_fact':
      this.service_fact=false;
      this.introduccion=true;
      break;
      case 'com_scroll':
      this.com_scroll=false;
      this.service_fact=true;
      this.introduccion=true;
      break;

      default:
        this.com_scroll=true
        this.service_fact=true;
        this.introduccion=true;
      break;
    }
  }

  archivoPdf(contenidoPdfSeleccionado,arc){
    this.archivoPdfS=arc;
    console.log(this.archivoPdfS)
    this.modal.open(contenidoPdfSeleccionado, { centered: true, size: 'xl', animation: true, backdrop: true })
  }
  archivoPdfmantenimiento(ayudaPdf){
    this.modal.open(ayudaPdf, { centered: true, size: 'sm', animation: true, backdrop: true })
  }
  zoom(){

    if(this.zoomLevel>=2){
      this.zoomLevel=1;
    }else{
      this.zoomLevel+=1;
    }
    
    console.log(this.zoomLevel+' '+ 'entra zoom')
  }
  menosZoom(){
    this.zoomPdf -=0.5;
  }
  masZoom(){
    this.zoomPdf +=0.5;
  }

  mostrarSeccion(seccion){

    switch (seccion){
      case 'seleccio_voyager':
        this.seleccio_voyager=false;
        this.diagnostico_compresor=true;
        this.fundamentos=true
        this.manten_precedent=true;
      break;
      case 'diagnostico_compresor':
        this.diagnostico_compresor=false;
        this.seleccio_voyager=true;
        this.fundamentos=true
        this.manten_precedent=true;
      break;
      case 'fundamentos':
        this.fundamentos=false;
        this.diagnostico_compresor=true;
        this.seleccio_voyager=true;
        this.manten_precedent=true;
      break;
      case 'manten_precedent':
        this.manten_precedent=false;
        this.seleccio_voyager=true;
        this.fundamentos=true
        this.diagnostico_compresor=true;
      break;

      default:
        this.fundamentos=true;
        this.manten_precedent=true;
        this.seleccio_voyager=true;
        this.diagnostico_compresor=true;

      break;


    }
  }
  updatePaso(paso){
    console.log(paso+' pasoooo')
switch (paso) {
  case 'paso1':
    if(this.paso1){
      this.paso1=false
    }else{
      this.paso1=true
    }
    
    break;

    case 'paso2':
    if(this.paso2){
      this.paso2=false
    }else{
      this.paso2=true
    }
    
    break;

    case 'paso3':
    if(this.paso3){
      this.paso3=false
    }else{
      this.paso3=true
    }
    
    break;
    case 'paso4':
    if(this.paso4){
      this.paso4=false
    }else{
      this.paso4=true
    }
    
    break;
    case 'paso5':
    if(this.paso5){
      this.paso5=false
    }else{
      this.paso5=true
    }
    
    break;
    case 'paso6':
    if(this.paso6){
      this.paso6=false
    }else{
      this.paso6=true
    }
    
    break;
    case 'paso7':
    if(this.paso7){
      this.paso7=false
    }else{
      this.paso7=true
    }
    
    break;
    case 'paso8':
    if(this.paso8){
      this.paso8=false
    }else{
      this.paso8=true
    }
    
    break;
    case 'paso9':
    if(this.paso9){
      this.paso9=false
    }else{
      this.paso9=true
    }
    
    break;
    case 'paso10':
    if(this.paso10){
      this.paso10=false
    }else{
      this.paso10=true
    }
    
    break;
    case 'paso11':
    if(this.paso11){
      this.paso11=false
    }else{
      this.paso11=true
    }
    
    break;
    case 'paso12':
    if(this.paso12){
      this.paso12=false
    }else{
      this.paso12=true
    }
    
    break;
    case 'paso13':
    if(this.paso13){
      this.paso13=false
    }else{
      this.paso13=true
    }
    
    break;
    case 'paso14':
    if(this.paso14){
      this.paso14=false
    }else{
      this.paso14=true
    }
    
    break;
    case 'paso15':
      if(this.paso15){
        this.paso15=false
      }else{
        this.paso15=true
      }
      
      break;
  default:
    console.log('entra al default')
    break;
}
  }
  updateProgress(checked: boolean) {
    console.log(checked)
   
    if (checked) {
      this.progressValue += 7;
    } else {
      this.progressValue -= 7;
    }
    if (this.progressValue < 0) {
      this.progressValue = 0;
    } else if (this.progressValue >= 100) {
      this.progressValue = 100;
    }
  }
  
}
