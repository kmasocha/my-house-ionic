import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {IonicStorageModule} from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {SchedulePage} from '../pages/schedule/schedule';
import { CategoryPage} from '../pages/category/category';
import {SupplierPage} from '../pages/supplier/supplier';
import {HelpPage} from '../pages/help/help';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite} from '@ionic-native/sqlite';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SchedulePage,
    CategoryPage,
    SupplierPage,
    HelpPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SchedulePage,
    CategoryPage,
    SupplierPage,
    HelpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
