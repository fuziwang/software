import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MyPage } from '../pages/my/my';
import { LoginPage } from '../pages/login/login';
import { ZhucePage } from '../pages/zhuce/zhuce';
import { FirstPage } from '../pages/first/first';
import { SetPwdPage}  from '../pages/set-pwd/set-pwd';
import { ResetPwdPage}  from '../pages/reset-pwd/reset-pwd';
import { XieyiPage} from '../pages/xieyi/xieyi';
import { TouxiangPage } from '../pages/touxiang/touxiang';
import { XingquPage } from '../pages/xingqu/xingqu';

import { ShequPage } from '../pages/shequ/shequ';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TieziPage } from '../pages/tiezi/tiezi';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MyPage,
    ShequPage,
    LoginPage,
    ZhucePage,
    FirstPage,
    SetPwdPage,
    ResetPwdPage,
    XieyiPage,
    TouxiangPage,
    XingquPage,
    TieziPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '返回',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition'
    },
  )],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MyPage,
    ShequPage,
    LoginPage,
    ZhucePage ,
    FirstPage,
    SetPwdPage,
    ResetPwdPage,
    XieyiPage,
    TouxiangPage,
    XingquPage,
    TieziPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
