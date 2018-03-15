import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
isOn:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private flashlight: Flashlight) {
  }
  openAbout(){
    this.navCtrl.push("AboutPage");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  lightOn(){
this.flashlight.switchOn();
this.updateStatus();
  }
  lightOff(){
    this.flashlight.switchOff();
    this.updateStatus();
  }
  updateStatus(){
    this.isOn = this.flashlight.isSwitchedOn();
  }

}
