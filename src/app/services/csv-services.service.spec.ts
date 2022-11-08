import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Spy } from 'jasmine-auto-spies';
import { CsvServicesService } from '../services/csv-services.service';

describe('CsvServicesService', () => {
  let CsvServices: CsvServicesService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let httpSpy: Spy<HttpClient>;

  let Orderdata = [
    {
           "id": 6,
           "name": "Super Tr",
           "state": "MH",
           "zip": "585101",
           "amount": "100",
           "qty": "12",
           "item": "TYU67"
       },
       {
           "id": 7,
           "name": "Test Amit",
           "state": "KA",
           "zip": "38383",
           "amount": "80",
           "qty": "12",
           "item": "ITG45"
       }
 ];

 beforeEach(() => {
  let httpClientSpyObj = jasmine.createSpyObj('HttpClient', ['GET']);
  TestBed.configureTestingModule({
    providers: [
      CsvServicesService,
      { provide: HttpClient, useValue: httpClientSpyObj}
    ],
  });
  CsvServices = TestBed.inject(CsvServicesService);
  httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
});

it('should be created Service', inject([CsvServicesService], (service: CsvServicesService) => {
  expect(service).toBeTruthy();
}));
  
});