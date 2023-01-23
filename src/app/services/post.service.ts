
import { Injectable } from '@angular/core';

//importamos los modulos para DN firestore
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Post } from '../../models/post.model';

///importamos nuestro modelo



@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private angularFirestore:AngularFirestore) { }

  //metodos para el CRUD
  

  getPosts(){
    return this.angularFirestore
    .collection("posts")
    .snapshotChanges()
  }

  getPostId(id){
    return this.angularFirestore
    .collection("posts")
    .doc(id)
    .valueChanges()
  }
  createPost(post:Post){
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
      .collection("posts")
      .add(post)
      .then((response)=>{
        console.log(response)
      },
      (error)=>{
        reject(error)
      }
      )
    })
  }
  updatePost(post:Post,id){
    return this.angularFirestore
    .collection("posts")
    .doc(id)
    .update({
      title:post.title,
      content:post.content,
      author:post.author,
    });
  }
  deletePost(post){
    return this.angularFirestore
    .collection("posts")
    .doc(post.id)
    .delete()
  }

  buscarPost(nombre:string){
   
return this.angularFirestore.collection('posts' ,ref=>ref.where('title','==',nombre)).snapshotChanges()
  }

}
