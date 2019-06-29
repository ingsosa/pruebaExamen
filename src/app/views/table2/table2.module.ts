import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Table2Component } from './table2.component';
import { Table2RoutingModule } from './table2-routing.module';

@NgModule({
  declarations: [
    Table2Component
  ],
  imports: [
    CommonModule,
    Table2RoutingModule
  ]
})
export class Table2Module { }
