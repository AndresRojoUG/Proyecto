import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Preguntass } from '../../models/Preguntas.model';


@Injectable({
  providedIn: 'root'
})
export class CrearPreguntasService {

  constructor(private angularFirestore:AngularFirestore) { }
//metodos para el CRUD
  

getPreguntas(){
  return this.angularFirestore
  .collection("preguntas")
  .snapshotChanges()
}

getPreguntasId(id: string | undefined){
  console.log(id)
  return this.angularFirestore
  .collection("preguntas")
  .doc(id)
  .valueChanges()
  
  
}
createPreguntas(preguntas:Preguntass){
  return new Promise<any>((resolve, reject) => {
    this.angularFirestore
    .collection("preguntas")
    .add(preguntas)
    .then((response)=>{
      console.log('RESPUESTA:  '+response)
    },
    (error)=>{
      reject(error)
    }
    )
  })
}
updatePost(preguntas:Preguntass,id){
  console.log('prepreprp '+id)
  return this.angularFirestore
  .collection("preguntas")
  .doc(id).set(preguntas)
  .then(function() {
      console.log("Document successfully updated!");
  })
  .catch(function(error) {
      console.error("Error updating document: ", error);
  });
  
}
deletePost(id){
  return this.angularFirestore
  .collection("preguntas")
  .doc(id)
  .delete()
}

buscarPost(nombre:string){
 
return this.angularFirestore.collection('preguntas' ,ref=>ref.where('title','==',nombre)).snapshotChanges()
}

}
 