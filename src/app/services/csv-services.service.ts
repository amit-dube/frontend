import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrderDetails } from '../model/OrderDetails';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CsvServicesService {
 
  constructor(private http: HttpClient) {  }

  private apiURL = 'http://localhost/codeigniter4/';


    /**
     *
     * getAllCsvOrders
     * Get AllOrder CSV record
     * @returns array
     */

     getAllCsvOrders(): Observable<OrderDetails[]> {
    return this.http.get<OrderDetails[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    );
    }

  /**
    *
    * @param id
    * @returns csv row record based on id
    */

    find(id: any): Observable<any> {
    return this.http.get(`${this.apiURL}getOrderById/${id}`);
  }

  /**
    * To create a new Order in CSV file
  */
  addCsvOrder(Order: OrderDetails): Observable<OrderDetails> {
    return this.http.post<OrderDetails>(`${this.apiURL}addOrderDataToCsv`, Order).pipe(
      catchError(this.errorHandler)
    );
  }

  /**
    * editCsvOrder
    * To Update Order in CSV
    * @param Order
    * return updated order
    */
  editCsvOrder(Order: OrderDetails): Observable<OrderDetails> {
    return this.http.post<OrderDetails>(`${this.apiURL}editOrderDataToCsv`, Order).pipe(
      catchError(this.errorHandler)
    );
  }


  /**
   * Get last inserted Order 
   * @returns last inserted increment id
  */

   getLastInsertedRecord(): Observable<OrderDetails[]> {
    return this.http.get<OrderDetails[]>(`${this.apiURL}getLastOrderCsvId`)
    .pipe(
      catchError(this.errorHandler)
    );
    }

  /**
    * To delete the multiple and single CSV Order    
  */
    multipleOrderDelete(selectedOrder: OrderDetails[]){
      return this.http.post<OrderDetails>(this.apiURL + 'deletaOrderData',  JSON.stringify(selectedOrder))
      .pipe(
        catchError(this.errorHandler)
      )
    }

   /**
   * Errors handler
   * function for error handling
   * @param error 
   * @returns  
   */
    errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(() => errorMessage);
   }

}
