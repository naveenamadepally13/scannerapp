import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AngularFireDatabase  } from 'angularfire2/database';
import {LoginUserService} from '../login-user.service';

import {Observable} from 'rxjs';
import * as firebase from 'firebase';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage {
  constructor(private barcodeScanner: BarcodeScanner, private angularFireDatabase: AngularFireDatabase, private loginUserService: LoginUserService) { }
  private userid: String ;
    private scaneddataText: String;
    private saveData: any = {
        'username' : this.userid,
        'scannedData' : this.scaneddataText
    };

 scanbarcode() {
     this.userid = this.loginUserService.userName;
   this.barcodeScanner.scan().then(barcodeData => {
     console.log('Barcode data', barcodeData);
     this.scaneddataText = barcodeData.text;
     this.saveData.username = this.userid;
     this.saveData.scannedData = this.scaneddataText;
       this.angularFireDatabase.object(`/scaneddata/${this.userid}`).set(this.saveData);
   }).catch(err => {
     console.log('Error', err);
   });
 }
}
