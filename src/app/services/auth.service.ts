
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userData: Observable<UserData> | undefined;

  private currentUser: UserData | undefined;
  private currentUser$ = new BehaviorSubject(null);
  constructor(private afs: AngularFirestore,
              private afAuth: AngularFireAuth) { 

    
  }
}

export interface UserData {
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
  id?: string;
};