import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CodigosErrorService {

  constructor(private angularFirestore:AngularFirestore) { }

  //metodos para el CRUD
  /*

  getBitacora(){
    return this.angularFirestore
    .collection("bitacora")
    .snapshotChanges()
  }

  getBitacoraId(id: string | undefined){
    return this.angularFirestore
    .collection("bitacora")
    .doc(id)
    .valueChanges()
  }
  createPost(bitacora:Bitacora){
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
      .collection("bitacora")
      .add(bitacora)
      .then((response)=>{
        console.log('RESPUESTA:  '+response)
      },
      (error)=>{
        reject(error)
      }
      )
    })
  }
  updatePost(bitacora:Bitacora,id: string | undefined){
    return this.angularFirestore
    .collection("bitacora")
    .doc(id)
    .update({
      
    });
  }
  deletePost(bitacora: any){
    return this.angularFirestore
    .collection("posts")
    .doc(bitacora.id)
    .delete()
  }

  buscarPost(nombre:string){
   
return this.angularFirestore.collection('posts' ,ref=>ref.where('title','==',nombre)).snapshotChanges()
  }


*/


}

