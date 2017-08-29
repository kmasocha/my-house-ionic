import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SQLite, SQLiteObject} from '@ionic-native/sqlite';
/**
 * Generated class for the CategoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage, private sqlite: SQLite) {
   // this.createDatabase();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

createDatabase(){
  this.sqlite.create({
name:'data.db',
location:'default'
  }).then((db:SQLiteObject)=>{
    db.executeSql('create table category(name VARCHAR(250))',{})
    .then(()=>console.log('Execute SQL'))
    .catch(e=>console.log(e));
  })
  .catch(e=>console.log(e));
}
 // this.storage.set('name','Max');
}
