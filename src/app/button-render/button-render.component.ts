import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-button-render',
  templateUrl: `button-render.component.html`,
  styleUrls: ['./button-render.component.css']
})
export class ButtonRenderComponent implements  ICellRendererAngularComp  {

  private params: any;
  public val: any;

  constructor( private route: ActivatedRoute, private router: Router ) { }


  /**
   * 
   * @param params 
   */

  agInit(params: any): void {
    this.params = params;
  }

  /**
   * It will handel the edit order component
   * Get the particular grid row order record
   */
  btnClickedHandler() {
    //get the grid row order records;
    this.val = this.params.data;
    this.router.navigateByUrl('editorder/'+this.val.id);    
  }
  
 
  /**
   * Refreshs button renderer component
   * @returns true if refresh 
   */
  refresh() {
    return true;
  }

}
