import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditDestinationModalPage } from './edit-destination-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EditDestinationModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDestinationModalPageRoutingModule {}
