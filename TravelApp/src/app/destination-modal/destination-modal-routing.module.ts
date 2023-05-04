import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DestinationModalPage } from './destination-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DestinationModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DestinationModalPageRoutingModule {}
