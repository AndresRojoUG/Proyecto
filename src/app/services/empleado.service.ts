import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Empleado } from '../../models/empleados.model';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private angularFirestore:AngularFirestore) { }

  createEmpleado(empleado:Empleado){
  // console.log(empleado['email']+'  creando empleado')
    let email=empleado['email']
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
      .collection("empleados")
      .doc(email)
      .set(empleado)
      .then((response)=>{
        console.log(empleado)
      },
      (error)=>{
        console.log(error)
        reject(error)
      }
      )
      
    })
  }

  getPostId(email){
    return this.angularFirestore
    .collection("empleados")
    .doc(email)
    .valueChanges()
  }
}
