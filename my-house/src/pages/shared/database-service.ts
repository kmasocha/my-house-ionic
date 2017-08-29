import { SQLite, SQLiteObject} from '@ionic-native/sqlite';


export class DatabaseService {

  constructor(private sqlite: SQLite) {}



createDatabase(){
  this.sqlite.create({
name:'my-house.db',
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