import { Component } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: Observable<firebase.User>;
  items: Observable<any[]>;
  constructor(public afAuth: AngularFireAuth, db: AngularFirestore){
    this.afAuth.auth.signInAnonymously();
    this.user = this.afAuth.authState;
    this.items = db.collection('items').valueChanges();
  }
}
