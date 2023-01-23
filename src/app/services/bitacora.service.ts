
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Bitacora } from '../../models/bitacora.model';


@Injectable({
  providedIn: 'root'
})
export class BitacoraService {

  constructor(private angularFirestore:AngularFirestore) { }

  //metodos para el CRUD
  

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
      paso1:bitacora.paso1,
      paso2:bitacora.paso2,
      paso3:bitacora.paso3,
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


}