import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BitacoraService } from '../../services/bitacora.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Bitacora } from '../../../models/bitacora.model';
import { ToastrService } from 'ngx-toastr';





@Component({
  selector: 'app-r410asplit',
  templateUrl: './r410asplit.component.html',
  styleUrls: ['./r410asplit.component.css']
})
export class R410asplitComponent implements OnInit {
  formLogin: FormGroup;
  mantenimiento=true;
  reparacion=true;
  start=0;
  posicionn=0
  pagina=1;
  paso2=true;
  paso3=true;
  botonMantenimiento=true;
  bitacora: Bitacora[];
   
fecha= new Date();
  fechaP!: number;
  archivo
 
  
  constructor(
    public formBuilder:FormBuilder,
   private bitacoraService:BitacoraService,
   private router: Router,
   private toast:ToastrService
   ,private modal:NgbModal
   
  ) { 
    this.formLogin = this.formBuilder.group({
    
      paso1:[''],
      paso2: [''],
      paso3:[''],
      paso1check: [''],
      paso2check: [''],
      paso3check: [''],
      fecha: this.fecha.toISOString(),
      posicion:[''],
      
    })

  }

  ngOnInit(): void {

    
    
    this.bitacoraService.getBitacora().subscribe((res)=>{
      
      this.bitacora=res.map((e)=>{
      
        return{
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Bitacora),
          
         
        };
      
      });
      
      this.bitacora.sort((a, b) =>b.posicion -  a.posicion);
   
  });
 
  
  }
 verId(id: string){
  console.log('idddd:::'+id)
 }
  onSubmit(){
 console.log(this.formLogin.value) 
 

  }

  mostrarMantenimiento(){
this.mantenimiento=false
this.reparacion=true
this.toast.info('Mantenimiento','ESCOGIO:')
  }
  mostrarReparacion(){
    this.mantenimiento=true
    this.reparacion=false
    this.mostrarSiguiente('cerrar')
    this.toast.info('Reparación','ESCOGIO:',)
    this.formLogin.reset()
  }

  mostrarSiguiente(paso:string){
    switch (paso){
      case 'paso2':
        this.paso2=false;
        break;
      case 'paso3':
        this.paso3=false;
        break;
        case 'botonMantenimiento':
        this.botonMantenimiento=false;
        break;
      default:
        this.paso2=true;
        this.paso3=true  
        this.botonMantenimiento=true;
    }
  }
 
   paso1(nombre: string){

    window.open('../../../assets/equipos/'+nombre,'ayuda','width=900,height=550');
    
    }

    agregarNuevaBitacora()
  {

  

    try{
  
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
      fecha: this.fecha.toISOString(),
      posicion:[''],
      
    })

     
 
    }catch(e){
      console.log(e)
      this.toast.error('Datos no guardados','ERROR!!!',)
    }

    

  }
  paginatioNext(name:string){
  
    switch(name){
      case 'siguiente':
        
        if(this.start >= this.bitacora.length){
          return
        }else{ this.start=this.start+5;
          this.pagina +=1}
       
        break;
      case 'regresa':
        if(this.start===0){   
        return
    }else{
      this.start=this.start-5
      this.pagina -=1
    }
  }
}
openXL(contenido,arc){
  console.log('jjjjjjj')
  this.archivo=arc;
  this.modal.open(contenido,{  centered:true,size:'xl'});
}
 }
