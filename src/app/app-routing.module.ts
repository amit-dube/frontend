import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCsvOrderComponent } from './add-csv-order/add-csv-order.component';
import { OrlderListComponent } from './order-list/order-list.component';
import { EditCsvOrderComponent } from './edit-csv-order/edit-csv-order.component';

const routes: Routes = [
  { path: '', redirectTo: 'OrlderListComponent', pathMatch: 'full'},
  { path: '', component: OrlderListComponent },
  { path: 'addorder', component: AddCsvOrderComponent },
  { path: 'editorder/:id', component: EditCsvOrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
