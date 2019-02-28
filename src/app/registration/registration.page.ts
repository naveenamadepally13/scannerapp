import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import {User} from 'src/Model/users';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  user = {} as User;
  constructor(private router: Router, public navCtrl: NavController, public afAuth: AngularFireAuth) {
  }
  register(user: User) {
    try {
      this.afAuth.auth.createUserWithEmailAndPassword(user.emailAddress, user.password).then(function () {
        alert('Created successfully, Now Login');
      }).catch(() => {
        alert('invalid email/password should be of 6 characters');
      });
    } catch (e) {
      console.error(e);
    }
  }
  ngOnInit() {
  }

}
