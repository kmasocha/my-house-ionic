import { SQLite, SQLiteObject} from '@ionic-native/sqlite';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

export class DatabaseCreation{
  constructor(private sqlite: SQLite, public toastCtrl:ToastController) {
    this.createTables();
  }

createDatabase(tableName){
  this.presentToast('I am here');
    this.sqlite.create({
    name:'my-house-db',
    location:'default'
    }).then((db:SQLiteObject)=>{
        db.executeSql(tableName,{})     
        .then(()=> this.presentToast('All tables created'))
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

createTables(){
    let categoryTable='CREATE TABLE IF NOT EXISTS CATEGORY (Id int, Name varchar(250),Active bit,CreatedDate datetime)';
    let scheduleTable='CREATE TABLE IF NOT EXISTS SCHEDULE (Id int,Name varchar(350),SupplierId int,ServiceDate datetime,Active bit, CreatedDate datetime)';
    let supplierTable='CREATE TABLE IF NOT EXISTS SUPPLIER (Id int,Name varchar(350),Address varchar(500),Landline varchar(100),MobileNumber varchar(100),'+
    'EmailAddress varchar(100),Website varchar(200),ContactPerson varchar(200),Active bit,CreatedDate datetime)';
    this.createDatabase(categoryTable);
    this.createDatabase(scheduleTable);
    this.createDatabase(supplierTable);
    // sdafsf
  }
  
  


}
