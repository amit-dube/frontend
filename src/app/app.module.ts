import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { OrlderListComponent } from './order-list/order-list.component';
import { AddCsvOrderComponent } from './add-csv-order/add-csv-order.component';

import { EditCsvOrderComponent } from './edit-csv-order/edit-csv-order.component';
import { ButtonRenderComponent } from './button-render/button-render.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CsvServicesService } from './services/csv-services.service';
import { ToastrServiceService } from './services/toastr-service.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    OrlderListComponent,
    AddCsvOrderComponent,
    EditCsvOrderComponent,
    ButtonRenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    NgbModule,
    
  ],
  providers: [CsvServicesService, ToastrServiceService],
  exports: [ButtonRenderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
