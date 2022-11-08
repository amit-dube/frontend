import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { CsvServicesService } from '././services/csv-services.service';

import { OrlderListComponent } from './order-list/order-list.component';
import { AddCsvOrderComponent } from './add-csv-order/add-csv-order.component';
import { EditCsvOrderComponent } from './edit-csv-order/edit-csv-order.component';
import { ButtonRenderComponent } from './button-render/button-render.component';


describe('AppComponent', () => {
  const routes: Routes = [
   
    { path: '', redirectTo: 'OrlderListComponent', pathMatch: 'full'},
    { path: '', component: OrlderListComponent },
    { path: 'addorder', component: AddCsvOrderComponent },
    { path: 'editorder/:id', component: EditCsvOrderComponent }
  ];
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        RouterModule.forRoot(routes),
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        OrlderListComponent,
        AddCsvOrderComponent,
        AddCsvOrderComponent,
        ButtonRenderComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
    ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  

  it(`should have as title 'GreenIT Application Challenge'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('GreenIT Application Challenge');
  });

  it(`should render title in a h2 tag 'GreenIT Application Challenge'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('GreenIT Application Challenge');
  });
  
});
