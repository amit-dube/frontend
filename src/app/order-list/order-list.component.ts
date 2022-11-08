import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridReadyEvent, CheckboxSelectionCallbackParams,  GridApi, HeaderCheckboxSelectionCallbackParams } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { CsvServicesService } from '../services/csv-services.service';
import { ButtonRenderComponent } from '../button-render/button-render.component';
import { ToastrServiceService } from '../services/toastr-service.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrlderListComponent implements OnInit {

  public paginationPageSize: number = 20;
  public domLayout: 'normal' | 'autoHeight' | 'print' = 'autoHeight';
  public pagetitle: string = "GreenIT Application Challenge";
  private gridApi!: GridApi;
  public rowSelection: 'single' | 'multiple' = 'multiple';

  /**
   * Creates an instance of order list component.
   * @param csvService 
   * @param Http
   * @param ToastrServiceService 
   * @
   */
constructor(private http: HttpClient, 
  private csvService: CsvServicesService,
  private ToastrServiceService: ToastrServiceService
  ) {

/**
 * Default configuration for ag grid table
*/
 this.defaultColDef = {
  sortingOrder: ["asc", "desc"],
  sortable:true, 
  filter: true,
  flex: 1
};

}

ngOnInit(): void { this.getAllOrders();  }

 /**
   * each Column Definition results in one Column.
   * headerName : table column name
   * field : name of the field
   * cellRenderer : button render component 
*/
public columnDefs: ColDef[] = [
  
  { field: 'id',minWidth: 180,
  headerCheckboxSelection: true,
  checkboxSelection: true},
  { field: 'name',},
  { field: 'state' },
  { headerName: 'Zip Code',field: 'zip' },
  { field: 'amount' },
  { headerName: 'Quantity',field: 'qty' },
  { headerName: 'Item No.',field: 'item' },
  {
    field: 'Action',   
    filter: false,
    cellRenderer: ButtonRenderComponent
  }
];

// DefaultColDef sets props common to all Columns
public defaultColDef: ColDef = {
  sortable: true,
  filter: true,
};



// Data that gets displayed in the grid
public rowData$!: Observable<any[]>;

public records: any = [];
// For accessing the Grid's API
@ViewChild(AgGridAngular) agGrid!: AgGridAngular;

getAllOrders(){
  this.csvService.getAllCsvOrders().subscribe((data: any) => {
    this.records = data;
  })
}


  /**
   * Determines whether grid ready on
   * @param params 
   */
   onGridReady(params: { api: GridApi<any>; }) {
    params.api.sizeColumnsToFit();    
    this.gridApi = params.api;
  }


    /**
   * Delete a single or multiple order in csv file
   * @param selectedData  
   * pass the selectedData to the multipleOrderDelete service
   */
  deleteSelectedOrder(){
    const selectedData = this.gridApi.getSelectedRows();
    if(selectedData.length>0){
      this.gridApi.applyTransaction({ remove: selectedData })
      this.csvService.multipleOrderDelete(selectedData).subscribe((response: any) => {
        
        if(response.error==false){
          this.ToastrServiceService.showSuccess('Order deleted successully!');          
        }else{
          this.ToastrServiceService.showError('Order not deleted!');
        }      
      })
    }else{
      this.ToastrServiceService.showWarning('Please select the Order');
    }
    
  }

}