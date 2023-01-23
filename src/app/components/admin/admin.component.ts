import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { CrearPreguntasService } from '../../services/crear-preguntas.service';
import { Preguntass } from '../../../models/Preguntas.model';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  pregunta:Preguntass[];
  pregunta2:Preguntass[];
  form: FormGroup;
  
  start=0;
  id
  postRef:any
  dataArray: any[];
  constructor(private formBuilder: FormBuilder,private preguntasService:CrearPreguntasService) {
    this.form = this.formBuilder.group({
     
    
      preguntas: this.formBuilder.array([])
    });
   
  
 }

  ngOnInit(): void {
    
    this.preguntasService.getPreguntas().subscribe((res)=>{
      
      this.pregunta=res.map((e)=>{
        this.id=e.payload.doc.id
        console.log(e.payload.doc.id,e.payload.doc.data())
        return{
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Preguntass),
          
         
        };
      
      });
      
   
  });




 
      
 

    
  }
  get preguntas(){
    return this.form.get('preguntas') as FormArray;
  }


  agregarPregunta(){
    
   
  
   
    console.log('AQUI SALE ALGO '+ this.preguntasService.getPreguntasId(this.id))
    const preguntaFormGroup  = this.formBuilder.group({
      paso: '',
      descripcionP: '', 
      archivoD:'',
      imagen:'',
    });
    this.preguntas.push(preguntaFormGroup);
  }

  removerPregunta(indice: number) {
    this.preguntas.removeAt(indice);
  }

  submit() {

    const formData = this.form.getRawValue();

 this.pregunta['preguntas']=formData.preguntas


    this.preguntasService.createPreguntas(this.form.value);
  }

  refrescar() {
    this.form.patchValue({ 
    
  
    });
    this.preguntas.controls.splice(0, this.preguntas.length);
  }

  eliminar(id){
  console.log(id)

this.preguntasService.deletePost(id)

  }

  actualizar(id){}
  trackByFn(index: number, item: any) {
    console.log ('no se'+item.id); // o cualquier otra propiedad que sea única
  }


}

