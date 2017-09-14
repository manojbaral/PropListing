import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {Observable} from "rxjs/Observable";
import {FlashMessagesService} from 'angular2-flash-messages';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: Observable<firebase.User>;

  constructor(
    public afAuth: AngularFireAuth,
    public flashMessage: FlashMessagesService,
    ) {
  }


  ngOnInit() {
  }

  login() {
    var provider = new firebase.auth.GoogleAuthProvider();

   // provider.addScope('https://www.googleapis.com/auth/plus.login');
   //  this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.afAuth.auth.signInWithPopup(provider);
  }

  logout() {
    this.afAuth.auth.signOut();
    this.flashMessage.show('You are Successfully Log Out',
      {cssClass: 'alert-success',timeout:3000})

  }
};
