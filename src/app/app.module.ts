import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopService } from './service/shop.service';
import { HomeComponent, LayoutComponent, AboutComponent, ContactComponent, ProfileComponent, ShopComponent, SignupComponent} from './route';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { firebaseConfig } from './../environments/firebase.config';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    AboutComponent,
    ContactComponent,
    ProfileComponent,
    ShopComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
