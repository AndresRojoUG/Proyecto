import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { CrearPreguntasService } from '../../services/crear-preguntas.service';
import { Preguntass } from '../../../models/Preguntas.model';
import { ConnectableObservable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-actualizar-preguntas',
  templateUrl: './actualizar-preguntas.component.html',
  styleUrls: ['./actualizar-preguntas.component.css']
})
export class ActualizarPreguntasComponent implements OnInit {
  formAct: FormGroup;
  preguntaA:Preguntass[];
  id
  postRef:any
  constructor (private router: Router,private formBuilder: FormBuilder,private preguntasService:CrearPreguntasService,private activeRoute: ActivatedRoute,) { 
    
    this.formAct = this.formBuilder.group({
     
    
      preguntas: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {

    this.preguntasService.getPreguntas().subscribe((res)=>{
      
      this.preguntaA=res.map((e)=>{
        this.id=e.payload.doc.id
        console.log(e.payload.doc.id,e.payload.doc.data())
        return{
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Preguntass),
          
         
        };
      
      });
      
   
  });



  const ids = this.activeRoute.snapshot.paramMap.get('id');
  this.cargardatos(ids)

  }

  
cargardatos(id){
  
  this.preguntasService.getPreguntasId(id).subscribe(res => {
    this.postRef = res;
    let indice=0
    for(indice;indice< this.postRef.preguntas.length;indice++){
console.log('aqui indice '+ indice)
      const preguntaFormGroup  = this.formBuilder.group({
        paso: [this.postRef.preguntas[indice]['paso']],
        descripcionP: [this.postRef.preguntas[indice]['descripcionP']], 
        archivoD: [this.postRef.preguntas[indice]['archivoD']],
        imagen: [this.postRef.preguntas[indice]['imagen']],
      });
      this.preguntasAct.push(preguntaFormGroup);
    }
    
    console.log(this.postRef.preguntas)        
  })
}
  //////////////////actualizar preguntas
  get preguntasAct(){
    return this.formAct.get('preguntas') as FormArray;
  }


  agregarPreguntaAct(){
    console.log(this.preguntaA)
   
  
   
    const preguntaFormGroup  = this.formBuilder.group({
      paso: '',
      descripcionP: '', 
      archivoD:'',
      imagen:'',
    });
    this.preguntasAct.push(preguntaFormGroup);
  }

  removerPreguntaAct(indice: number) {
    this.preguntasAct.removeAt(indice);
  }

  

  refrescarAct() {
    this.formAct.patchValue({ 
    
  
    });
    this.preguntasAct.controls.splice(0, this.preguntasAct.length);
  }
submit(){
  const formData = this.formAct.getRawValue();

  this.preguntaA['preguntas']=formData.preguntas
 
  const ids = this.activeRoute.snapshot.paramMap.get('id');
     this.preguntasService.updatePost(this.formAct.value,ids);

     this.router.navigate(['/admin']);
}
}
