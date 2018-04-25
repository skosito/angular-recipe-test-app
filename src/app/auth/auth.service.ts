import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) { }

  signUpUser(email: string, pwd: string) {
    firebase.auth().createUserWithEmailAndPassword(email, pwd).catch(error => console.log(error));
  }

  signInUser(email: string, pwd: string) {
    firebase.auth().signInWithEmailAndPassword(email, pwd).then(response => {
      this.router.navigate(['/']);
      firebase.auth().currentUser.getToken().then((token: string) => {
      this.token = token;
    });
   }
  )
    .catch(error => console.log(error));
  }

  getToken() {
    firebase.auth().currentUser.getToken().then(token => this.token = token);
    return this.token;
  }

  isAuth() {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }
}
