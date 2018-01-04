import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user: Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth,) {
    this.afAuth.auth.signInAnonymously();
    this.user = this.afAuth.authState;
  }
}
