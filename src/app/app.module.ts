import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { firebaseConfig } from './config/angular-fire.config';
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
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule
  ],
  providers: [ AngularFirestore ],
  bootstrap: [AppComponent],
})
export class AppModule { }
