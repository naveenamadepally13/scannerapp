import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {LoginPageModule} from './login/login.module';
import {RegistrationPageModule} from './registration/registration.module';

const config = {
  apiKey: 'AIzaSyAB73hk8ugjIX2W3wyqIBhg2NGOIrQ2y3M',
  authDomain: 'lab-5-9e7fb.firebaseapp.com',
  databaseURL: 'https://lab-5-9e7fb.firebaseio.com',
  projectId: 'lab-5-9e7fb',
  storageBucket: 'lab-5-9e7fb.appspot.com',
  messagingSenderId: '1014906653653'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireDatabaseModule, AngularFireModule,
  AngularFireModule.initializeApp(config)],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
