import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NavController} from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  constructor(private router: Router, private navCtrl: NavController) { }
  emailAddress;
  password;
  login() {
    if (this.emailAddress in window.localStorage) {
      if (JSON.parse(localStorage.getItem(this.emailAddress))['Password'] === this.password) {
        this.router.navigateByUrl('tabs/home');
      } else {  }
    } else {
      this.navCtrl.navigateRoot('tabs/scanner');
    }
  }
  ngOnInit() {
  }

}
