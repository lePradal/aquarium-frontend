import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AquariumComponent } from './aquarium.component';
import { AquariumCreateComponent } from './components/aquarium-create/aquarium-create.component';
import { AquariumDetailedComponent } from './components/aquarium-detailed/aquarium-detailed.component';
import { AquariumUpdateComponent } from './components/aquarium-update/aquarium-update.component';

const routes: Routes = [
  { path: '', component: AquariumComponent },
  { path: 'create', component: AquariumCreateComponent },
  { path: 'update/:id', component: AquariumUpdateComponent },
  { path: ':id', component: AquariumDetailedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AquariumRoutingModule { }
