import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {FirebaseService} from './services/firebase.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import {FlashMessagesModule} from "angular2-flash-messages";

//Fire Database Information
export const environment={
  production: false,
  firebase: {
    apiKey: 'AIzaSyAp7XtUO4M6VbldbjXVDz10iAchE8YLsVE',
    authDomain: 'proplistings-2e447.firebaseapp.com',
    databaseURL: 'https://proplistings-2e447.firebaseio.com',
    projectId: 'proplistings-2e447',
    storageBucket: 'proplistings-2e447.appspot.com',
    messagingSenderId: '474658708175'
  }
};

//Firebase Google Authentication
const firebaseAuthConfig = {
  provider: new firebase.auth.GoogleAuthProvider(),
  method: AngularFireAuth
}


//Component Routing

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'listings',component:ListingsComponent},
  {path:'listing/:id',component:ListingComponent},
  {path:'add-listing',component:AddListingComponent},
  {path: 'edit-listing/:id', component:EditListingComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService,AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
