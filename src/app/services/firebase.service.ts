import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable }
from 'angularfire2/database';
import {Observable} from "rxjs/Observable";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';


import {ActivatedRoute} from "@angular/router";

// @Injectable()
// export class FirebaseService {
//   user: Observable<firebase.User>;
//   listings: FirebaseListObservable<any[]>;
//   listing: FirebaseObjectObservable<Listing>;
//   folder:any;
//
//   constructor(
//     private db: AngularFireDatabase,
//     public afAuth: AngularFireAuth,
//     private afDB: AngularFireDatabase,)
//
//   {
//     this.user = afAuth.authState;
//     this.folder ='listingImages';
//   }
//
//   getListings(){
//     this.listings = this.db.list('/listings') as FirebaseListObservable<Listing[]>;
//     return this.listings;
//   }
//
// //  Listings Details
//   getListingDetails(id){
//     this.listing = this.afDB.object('/listings/'+id) as FirebaseObjectObservable<Listing>;
//     return this.listing;
//
//   }
//
//   //Add Listing
//   addListing(listing) {
//
//     //  Create root ref
//     let storageRef = firebase.storage().ref();
//
//     //  Uploading Image
//     for (let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]) {
//
//       let path = `/${this.folder}/${selectedFile.name}`;
//       let iRef = storageRef.child(path);
//
//       iRef.put(selectedFile).then((snapshot) => {
//         listing.image = selectedFile.name;
//         listing.path = path;
//         return this.listings.push(listing);
//       });
//     }
//
//
//
// //Creating Interface Listing
// interface Listing{
//
//   $key ?: string;
//   title ?: string;
//   type ?: string;
//   image ?: string;
//   city ?: string;
//   owner ?: string;
//   bedrooms ?: string;
//
// }

@Injectable()
export class FirebaseService {
  user: Observable<firebase.User>;
  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any>;
  folder: any;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private afDB: AngularFireDatabase,
  )

  {
    this.user = afAuth.authState;
    this.folder ='listingImages';
  }

  getListings() {
    this.listings = this.db.list('/listings') as FirebaseListObservable<Listing[]>;
    return this.listings;


  }

  getListingDetails(id){

    this.listing = this.afDB.object('/listings/'+id) as FirebaseObjectObservable<any>;
    return this.listing;

  }

  addListing(listing){
    // Create root ref
    let storageRef = firebase.storage().ref();

    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){

      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);

      iRef.put(selectedFile).then((snapshot) => {
        listing.image = selectedFile.name;
        listing.path = path;
        return this.listings.push(listing);
      });
    }
  }

//   updateListing(id,listing){
//     return this.listings.update(id, listing);
//   }
//
//   deleteListing(id){
//     return this.listings.remove(id);
//   }
//
  updateListing(id, listing){
    return this.listings.update(id, listing);
  }

  deleteListing(id){
    return this.listings.remove(id);
  }

}

interface Listing{

  $key ?: string;
  title ?: string;
  type ?: string;
  image ?: string;
  city ?: string;
  owner ?: string;
  bedrooms ?: string;
  path?: string;
}
