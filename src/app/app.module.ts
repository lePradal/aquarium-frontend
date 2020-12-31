import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/shared/header/header.component';
import { LoadingComponent } from './core/shared/loading/loading.component';
import { AquariumDetailedComponent } from './features/aquarium/aquarium-detailed/aquarium-detailed.component';
import { AquariumSimpleContainerComponent } from './features/aquarium/aquarium-simple-container/aquarium-simple-container.component';
import { AquariumSimpleComponent } from './features/aquarium/aquarium-simple/aquarium-simple.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LoginComponent } from './features/login/login.component';
import { SignupComponent } from './features/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    SignupComponent,
    AquariumSimpleComponent,
    AquariumDetailedComponent,
    AquariumSimpleContainerComponent,
    LoadingComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
