import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import {User} from 'src/Model/users';
// import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import {element} from 'protractor';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  user = {} as User;
  users;
  ref = firebase.database().ref('user/');
  constructor(private router: Router, public navCtrl: NavController, private angularFireDatabase: AngularFireDatabase, public alertController: AlertController) {
  }

  async successAlert() {
    const alert = await this.alertController.create({
      header: 'Registered Successfully',
      message: 'Your account has been created successfully',
      buttons: ['Ok']
    });
    await alert.present();
  }

  async passwordError() {
    const alert = await this.alertController.create({
      header: 'Password mismatch',
      message: 'Password and confirm password does not match.',
      buttons: ['Ok']
    });
    await alert.present();
  }

  async accountError() {
    const alert = await this.alertController.create({
      header: 'Account exists',
      message: 'You already have an account with this User Name',
      buttons: ['Ok']
    });
    await alert.present();
  }

  register(user: User) {
      const userData: firebase.database.Reference = firebase.database().ref('/user/');
      userData.on('value', userSnapshot => {
        this.users = userSnapshot.val();
        if (this.user.password === this.user.confirmPassword) {
          if (this.users[this.user.userName]) {
            // this.accountError();
          } else {
            this.angularFireDatabase.object(`/user/${this.user.userName}`).set(this.user);
            this.successAlert();
            this.router.navigateByUrl('tabs/login');
          }
        } else {
          this.passwordError();
        }
      });
  }
  ngOnInit() {
  }

}
