import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AngularFireDatabase  } from 'angularfire2/database';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage {
  constructor(private barcodeScanner: BarcodeScanner, private angularFireDatabase: AngularFireDatabase) { }
  private encodeData: String ;
  private scannerData: any = {};
    public scaneddata: any = {
     'userid': String,
      'encodeddata': String,
    };
items: Observable<any[]>;
  encodebarcode() {
      this.scaneddata.userid = 'neha';
      this.scaneddata.encodeddata = this.encodeData;
      const scanRef: firebase.database.Reference = firebase.database().ref('/scaneddata/');
      scanRef.on('value', personSnapshot => {
          this.items = personSnapshot.val();
          console.log(this.items ) ;
      });
      this.angularFireDatabase.object(`/scaneddata/${this.scaneddata.userid}`).set(this.scaneddata);
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData).then(data => {
      console.log(data);
    }, (err) => {
      console.log('Error occured : ' + err);
    });
  }
 scanbarcode() {
   this.barcodeScanner.scan().then(barcodeData => {
     console.log('Barcode data', barcodeData);
     this.scannerData = barcodeData;
   }).catch(err => {
     console.log('Error', err);
   });
 }
}
