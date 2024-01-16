// import { User } from "firebase/compat/app";
import User from 'firebase/compat/app';


import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostService {
 currentUser =  User;

  constructor(private afs: AngularFirestore,
              private afAuth: AngularFireAuth) { 

                // this.afAuth.authState.subscribe(
                //   // (user: User | null) => this.currentUser = user
                // );
              }
  
  getAllPosts(): Observable<any> {
    return this.afs.collection<any>('posts')
    .snapshotChanges() 
    .pipe(
      map(actions=>{
        return actions.map(item =>{
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          };
        });
      })
    )
    
  }

  postMessage(message:string, ownerName:string, othersItems:any):void {
    this.afs.collection('posts').add({
      message,
      title: ownerName,
      user_id: this.currentUser,
      time: firebase.firestore.FieldValue.serverTimestamp(),
      ...othersItems
    }).then(res => console.log(res)).catch(err => console.log(err));
  }
}
