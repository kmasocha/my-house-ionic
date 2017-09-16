import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,  private sqlite: SQLite, public toastCtrl:ToastController) {
    this.createDatabase();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }
  init(){
    this.presentToast('my test');
  }

createDatabase(){
  this.sqlite.create({
name:'data.db',
location:'default'
  }).then((db:SQLiteObject)=>{
    db.executeSql('create table if not exists category(name VARCHAR(250))',{})
    .then(()=> this.presentToast('category table created'))
    .catch(e=>this.presentToast('Error in creating a table'));
  })
  .catch(e=>this.presentToast('Erorr in database creation'));
}

presentToast(_message){
  let toast=this.toastCtrl.create({
    message:_message,
    duration:3000
  });
  toast.present();
}

saveCategory(){
  
}

}
