import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 loginUser=false;
  constructor(private auth: AngularFireAuth) { }
  register({ email, password }: any) {
    return this.auth.createUserWithEmailAndPassword(email,password);
  }
  login({ email, password}: any) {
    this.loginUser=true;
    return this.auth.signInWithEmailAndPassword( email, password);
  }
  loginWithGoogle() {
    this.loginUser=true;
    console.log(this.auth.user)
    return this.auth.signInWithPopup( new GoogleAuthProvider());
  }

  logout() {
    this.loginUser=false;
    return this.auth.signOut();
  }

  usuarioAutenticado(){
    return this.loginUser;
  }

}
