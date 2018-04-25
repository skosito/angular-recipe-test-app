import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  choiceSelection = 0;

  onChoiceSelected(event) {
    this.choiceSelection = event;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCrew-tQdq0wZQSe2ZzgCIyvnddrnXel3Y',
      authDomain: 'angular-test-486dd.firebaseapp.com'
    });
  }
}
