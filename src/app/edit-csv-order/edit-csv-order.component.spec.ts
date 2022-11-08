import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { EditCsvOrderComponent } from './edit-csv-order.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CsvServicesService } from '../services/csv-services.service';
import { ToastrModule } from 'ngx-toastr';
import { ToastrServiceService } from '../services/toastr-service.service';
import { RouterTestingModule } from "@angular/router/testing";


describe('EditCsvOrderComponent', () => {
  let component: EditCsvOrderComponent;
  let fixture: ComponentFixture<EditCsvOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule,ReactiveFormsModule,HttpClientModule,HttpClientTestingModule,RouterTestingModule,
        ToastrModule.forRoot({
          timeOut: 4000,
          positionClass: 'toast-top-center',
          preventDuplicates: true,
        }),
      ],
      declarations: [ EditCsvOrderComponent ],
      providers: [CsvServicesService, ToastrServiceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCsvOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  
});
