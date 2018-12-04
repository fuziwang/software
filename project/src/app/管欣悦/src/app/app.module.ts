import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CommunityPage } from '../pages/community/community';
import { MyPage } from '../pages/my/my';
import { FeelPage } from '../pages/feel/feel';
import { CameraPage } from '../pages/camera/camera';
import { ChoosePage } from '../pages/choose/choose';
import { AuthoritPage } from '../pages/authorit/authorit';
import { SharePage } from '../pages/share/share';
import { PicturePage } from '../pages/picture/picture';
import { ChoopicturePage } from '../pages/choopicture/choopicture';
import { VidioPage } from '../pages/vidio/vidio';
import { ArticlePage } from '../pages/article/article';
import { AutharticlePage } from '../pages/autharticle/autharticle';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    // 
    ContactPage,
    FeelPage,
    CameraPage,
    ChoosePage,
    AuthoritPage,
    SharePage,
    PicturePage,
    ChoopicturePage,
    VidioPage,
    ArticlePage,
    AutharticlePage,
    // 
    HomePage,
    CommunityPage,
    MyPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    //
    ContactPage,
    FeelPage,
    CameraPage,
    ChoosePage,
    AuthoritPage,
    SharePage,
    PicturePage,
    ChoopicturePage,
    VidioPage,
    ArticlePage,
    AutharticlePage,
    //
    HomePage,
    TabsPage,
    CommunityPage,
    MyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
