import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NavController} from '@ionic/angular';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import {User} from 'src/Model/users';
import { AlertController } from '@ionic/angular';
import {LoginUserService} from '../login-user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  user = {} as User;
  users;
  constructor(private router: Router, private navCtrl: NavController, private angularFireDatabase: AngularFireDatabase,
              public alertController: AlertController, private loggedInUser: LoginUserService) { }
  async accountError() {
    const alert = await this.alertController.create({
      header: 'Account does not exists',
      message: 'You do not have any account. Please create account on registration page.',
      buttons: ['Ok']
    });
    await alert.present();
  }

  async passwordError() {
    const alert = await this.alertController.create({
      header: 'Password is Incorrect',
      message: 'Please enter the correct password',
      buttons: ['Ok']
    });
    await alert.present();
  }
  login() {
      const userData: firebase.database.Reference = firebase.database().ref('/user/');
      userData.on('value', userSnapshot => {
        this.users = userSnapshot.val();
        if (this.users[this.user.userName]) {
           if (this.users[this.user.userName]['password'] === this.user.password) {
             this.loggedInUser.userName = this.user.userName;
             this.router.navigateByUrl('tabs/scanner');
           } else {
             this.passwordError();
           }
        } else {
          this.accountError();
          this.router.navigateByUrl('tabs/registration');
        }
      });
  }
  ngOnInit() {
  }

}
