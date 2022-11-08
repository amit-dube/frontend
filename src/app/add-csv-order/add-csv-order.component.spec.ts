import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { AddCsvOrderComponent } from './add-csv-order.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CsvServicesService } from '../services/csv-services.service';
import { ToastrModule } from 'ngx-toastr';
import { ToastrServiceService } from '../services/toastr-service.service';
import { RouterTestingModule } from "@angular/router/testing";


describe('AddCsvOrderComponent', () => {
  let component: AddCsvOrderComponent;
  let fixture: ComponentFixture<AddCsvOrderComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule,ReactiveFormsModule,HttpClientModule,HttpClientTestingModule,RouterTestingModule,
        ToastrModule.forRoot({
          timeOut: 4000,
          positionClass: 'toast-top-center',
          preventDuplicates: true,
        }),
      ],
      declarations: [ AddCsvOrderComponent ],
      providers: [CsvServicesService,ToastrServiceService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCsvOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the create app AddCsvOrderComponent', () => {
    const fixture = TestBed.createComponent(AddCsvOrderComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as pagetitle 'GreenIT Application Challenge'`, () => {
    const fixture = TestBed.createComponent(AddCsvOrderComponent);
    const app = fixture.componentInstance;
    expect(app.pagetitle).toEqual('GreenIT Application Challenge');
  });



});
