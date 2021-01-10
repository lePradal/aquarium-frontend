import { CommonModule } from '@angular/common';
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
import { ModalComponent } from './core/shared/modal/modal.component';
import { AquariumCreateComponent } from './features/aquarium/aquarium-create/aquarium-create.component';
import { AquariumDetailedComponent } from './features/aquarium/aquarium-detailed/aquarium-detailed.component';
import { AquariumSimpleContainerComponent } from './features/aquarium/aquarium-simple-container/aquarium-simple-container.component';
import { AquariumSimpleComponent } from './features/aquarium/aquarium-simple/aquarium-simple.component';
import { AquariumUpdateComponent } from './features/aquarium/aquarium-update/aquarium-update.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { SigninComponent } from './features/login/signin/signin.component';
import { SignupComponent } from './features/login/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HeaderComponent,
    DashboardComponent,
    SignupComponent,
    AquariumSimpleComponent,
    AquariumDetailedComponent,
    AquariumSimpleContainerComponent,
    LoadingComponent,
    AquariumUpdateComponent,
    ModalComponent,
    AquariumCreateComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
