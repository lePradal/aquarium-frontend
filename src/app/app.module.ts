import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/shared/header/header.component';
import { LoadingComponent } from './core/shared/loading/loading.component';
import { HomeComponent } from './features/home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoadingComponent,
    HomeComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    NgxSpinnerModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDNBzHEeQUTHv2Vuj0XUfXMzLqlCYvEiP0",
      authDomain: "aquarium-frontend.firebaseapp.com",
      projectId: "aquarium-frontend",
      storageBucket: "aquarium-frontend.appspot.com",
      messagingSenderId: "448078783788",
      appId: "1:448078783788:web:4aa8ed06fc257a4b457889",
      measurementId: "G-JTGNH056RL"
    }),
    AngularFireStorageModule
  ],
  providers: [ ],
  bootstrap: [AppComponent],
})
export class AppModule { }
