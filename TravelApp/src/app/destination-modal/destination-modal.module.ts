import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DestinationModalPageRoutingModule } from './destination-modal-routing.module';

import { DestinationModalPage } from './destination-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DestinationModalPageRoutingModule
  ],
  declarations: [DestinationModalPage]
})
export class DestinationModalPageModule {}
