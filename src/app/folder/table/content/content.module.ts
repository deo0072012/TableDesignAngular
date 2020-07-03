import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { DisplayComponent } from './display/display.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';

import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [DisplayComponent],
  imports: [
    CommonModule,
    ContentRoutingModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule
   
  ]
})
export class ContentModule { }
