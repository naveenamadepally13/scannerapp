import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(private router: Router, public navCtrl: NavController) { }
  emailAdress;
  password;
  confirmPassword;
  lastName;
  firstName;
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
