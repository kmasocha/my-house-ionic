import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryPage } from './category';
import { SQLite} from '@ionic-native/sqlite';

@NgModule({
  declarations: [
    CategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoryPage),
  ],
  providers:[
    SQLite
  ]
})
export class CategoryPageModule {}
