import { Component, OnInit } from '@angular/core';
import { R410asplitComponent } from '../r410asplit/r410asplit.component';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-formulario-minisplit-muro-alto-unidades',
  templateUrl: './formulario-minisplit-muro-alto-unidades.component.html',
  styleUrls: ['./formulario-minisplit-muro-alto-unidades.component.css']
})
export class FormularioMinisplitMuroAltoUnidadesComponent implements OnInit {
  formUnidades: FormGroup;
  paso2Unidades=true;
  paso4Unidades=true;
  paso3Unidades=true;
  paso5Unidades=true;
  paso6Unidades=true;
  paso7Unidades=true;
  paso8Unidades=true;
  paso9Unidades=true;
  paso10Unidades=true;
  posicionnUnidades=0
  botonMantenimientoUnidades=true
  fecha_modelo1=true;
  archivo
  constructor(private mini:R410asplitComponent,
    public formBuilder:FormBuilder,
    ) { 

    this.formUnidades = this.formBuilder.group({
    
      
      paso1Unidadescheck: [''],
      paso2Unidadescheck: [''],
      paso3Unidadescheck: [''],
      paso4Unidadescheck: [''],
      paso5Unidadescheck: [''],
      paso6Unidadescheck: [''],
      paso7Unidadescheck: [''],
      paso8Unidadescheck: [''],
      paso9Unidadescheck: [''],
      paso10Unidadescheck: [''],
      NoAplicaUnidadescheck:[''],
      fecha: [],
      posicion:[''],
      
    })

  }

  ngOnInit(): void {
  }


  agregarNuevoReporte(){

}
noAplicaUnidadescheck(){

}
mostrarSiguienteUnidades(paso){
  switch (paso){
    case 'paso2':
    this.paso2Unidades=false;
    break;
    case 'paso3':
    this.paso3Unidades=false;
    break;
    case 'paso4':
    this.paso4Unidades=false;
    break;
    case 'paso5':
    this.paso5Unidades=false;
    break;
    case 'paso6':
    this.paso6Unidades=false;
    break;
    case 'paso7':
    this.paso7Unidades=false;
    break;
    case 'paso8':
      this.paso8Unidades=false;
    break;
    case 'paso9':
        this.paso9Unidades=false;
    break;
    case 'paso10':
          this.paso10Unidades=false;
    break;
 
    case 'botonMantenimientoUnidad':
    this.botonMantenimientoUnidades=false;
    break;
    case 'fecha_modelo1':
    this.fecha_modelo1=false;
    break;
   
  default:
    this.paso2Unidades=true;
    this.paso3Unidades=true  
    this.paso4Unidades=true  
    this.paso5Unidades=true  
    this.paso6Unidades=true
    this.paso7Unidades=true
    this.paso8Unidades=true
    this.paso9Unidades=true
    this.paso10Unidades=true
    
    this.fecha_modelo1=true;
    this.botonMantenimientoUnidades=true;
}
}

open(contenido,arc){
  this.mini.openXL(contenido,arc)
}

}
