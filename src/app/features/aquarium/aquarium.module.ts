import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ModalComponent } from 'src/app/core/shared/modal/modal.component';
import { AquariumComponent } from './aquarium.component';
import { AquariumRoutingModule } from './aquarium.routing.module';
import { AquariumCreateComponent } from './components/aquarium-create/aquarium-create.component';
import { AquariumDetailedComponent } from './components/aquarium-detailed/aquarium-detailed.component';
import { AquariumSimpleContainerComponent } from './components/aquarium-simple-container/aquarium-simple-container.component';
import { AquariumSimpleComponent } from './components/aquarium-simple/aquarium-simple.component';
import { AquariumUpdateComponent } from './components/aquarium-update/aquarium-update.component';
import { AquariumService } from './service/aquarium.service';

@NgModule({
  declarations: [
    AquariumComponent,
    AquariumCreateComponent,
    AquariumDetailedComponent,
    AquariumUpdateComponent,
    AquariumSimpleComponent,
    AquariumSimpleContainerComponent,
    ModalComponent,
  ],
  imports: [
    AquariumRoutingModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    AquariumService,
  ],
  exports: []
})

export class AquariumModule { }
