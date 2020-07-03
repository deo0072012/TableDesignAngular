import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './footer/footer.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatIconModule
  ]
})
export class SharedModule { }
