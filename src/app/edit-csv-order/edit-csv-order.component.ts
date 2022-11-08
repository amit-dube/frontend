import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CsvServicesService } from '../services/csv-services.service';
import { ToastrServiceService } from '../services/toastr-service.service';
@Component({
  selector: 'app-edit-csv-order',
  templateUrl: './edit-csv-order.component.html',
  styleUrls: ['./edit-csv-order.component.css']
})
export class EditCsvOrderComponent implements OnInit {

  id!: number;
  form!: FormGroup;
  public post: any;
  public records: any;
  public pagetitle: string = "GreenIT Application Challenge";
  public data: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private csvService: CsvServicesService,
    private ToastrServiceService: ToastrServiceService
  ) { }

  ngOnInit(): void {

    /**
     * Get the edit CSV record id
     */
    this.id = this.route.snapshot.params['id'];

    /**
     * initialize the fetch record function 
     */
   this.getDataById();

   /**
    * Form variable
    */
     this.form = new FormGroup({
      id: new FormControl(this.id),
      name: new FormControl('', [ Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]*$/)]),
      state: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z\s]*$/)]),
      zip: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[0-9]+$/)]),
      amount: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern(/^\d+\.?\d*$/)]),
      qty: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern(/^[0-9]+$/)]),
      item: new FormControl('')
    });
  }

  // Validation for Only alphabets and space are allowed
  keyPressAlphaNumeric(event: any) {

    var inp = String.fromCharCode(event.keyCode);

    if (/^[a-zA-Z ]*$/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  // Get the data from CSV through row id
  getDataById() {
    this.csvService.find(this.id).subscribe((data: any)=>{
    this.post = data;
  });
  }
  
  
  /**
  * getFormfield
  * convenience getter for easy access to form fields
  * Creating a get property like 'getFormfield'
  */
  get getFormfield(){
    this.form.controls['item'].disable();
    return this.form.controls;
  }

  /**
   * updateOrder
   * Update the order in the csv file
   * @param array
  */
   updateOrder(){
      this.csvService.editCsvOrder(this.form.getRawValue()).subscribe((response: any) => {
        
        if(response.error==false){
          this.ToastrServiceService.showSuccess('Order update successully!');
          this.router.navigateByUrl('/');
        }else{
          this.ToastrServiceService.showError('Please enter the required field');
        }
    })
  }

}
