import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditDestinationModalPageRoutingModule } from './edit-destination-modal-routing.module';

import { EditDestinationModalPage } from './edit-destination-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditDestinationModalPageRoutingModule
  ],
  declarations: [EditDestinationModalPage]
})
export class EditDestinationModalPageModule {}
