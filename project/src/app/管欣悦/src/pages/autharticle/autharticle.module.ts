import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AutharticlePage } from './autharticle';

@NgModule({
  declarations: [
    AutharticlePage,
  ],
  imports: [
    IonicPageModule.forChild(AutharticlePage),
  ],
})
export class AutharticlePageModule {}
