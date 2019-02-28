import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage {
  private encodeData: String =  'hello all';
  private encodedData: any = {};
  private scannerData: any = {};
  constructor(private barcodeScanner: BarcodeScanner) { }
  encodebarcode() {
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData).then(data => {
      console.log(data);
      this.encodedData = data;
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
