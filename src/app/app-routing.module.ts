import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: './views/table1/table1.module#Table1Module'
  },
  {
    path: ':id', loadChildren: './views/table2/table2.module#Table2Module'
  },
  {
    path: 'busqueda/:palabra', loadChildren: './views/table3/table3.module#Table3Module'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
