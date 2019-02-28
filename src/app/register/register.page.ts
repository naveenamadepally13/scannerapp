import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router, public navCtrl: NavController) { }
  emailAdress;
  password;
  confirmPassword
  register() {
    if (this.emailAdress in window.localStorage) {
    } else {
      if (this.password === this.confirmPassword) {
        }
        this.navCtrl.navigateRoot('tabs/login');
      }
    }
  ngOnInit() {
  }

}
