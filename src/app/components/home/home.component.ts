import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from "angular2-flash-messages";
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor(
    public afAuth: AngularFireAuth,
    public flashMessage: FlashMessagesService,
  ) { }

  ngOnInit() {
  }

  login() {
    var provider = new firebase.auth.GoogleAuthProvider();

    // provider.addScope('https://www.googleapis.com/auth/plus.login');
    //  this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.afAuth.auth.signInWithPopup(provider);
  }

}
