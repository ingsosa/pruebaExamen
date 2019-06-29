import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Table3Component } from './table3.component';
import { Table3RoutingModule } from './table3-routing.module';

@NgModule({
  declarations: [
    Table3Component
  ],
  imports: [
    CommonModule,
    Table3RoutingModule
  ]
})
export class Table3Module { }
