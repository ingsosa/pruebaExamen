import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Table1Component } from './table1.component';
import { Table1RoutingModule } from './table1-routing.module';

@NgModule({
  declarations: [
    Table1Component
  ],
  imports: [
    CommonModule,
    Table1RoutingModule
  ]
})
export class Table1Module { }
