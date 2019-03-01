import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NavController} from '@ionic/angular';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  constructor(private router: Router, private navCtrl: NavController, private angularFireDatabase: AngularFireDatabase) { }
  emailAddress;
  password;
  login() {
    if (this.emailAddress in window.localStorage) {
      if (JSON.parse(localStorage.getItem(this.emailAddress))['Password'] === this.password) {
        this.router.navigateByUrl('tabs/scanner');
      } else {
          this.router.navigateByUrl('tabs/registration');
      }
    } else {
      this.navCtrl.navigateRoot('tabs/registration');
    }
  }
  ngOnInit() {
  }

}
