import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CsvServicesService } from '../services/csv-services.service';
import { ToastrServiceService } from '../services/toastr-service.service';


@Component({
  selector: 'app-add-csv-order',
  templateUrl: './add-csv-order.component.html',
  styleUrls: ['./add-csv-order.component.css']
})
export class AddCsvOrderComponent implements OnInit {
  id: number = 0;
  form!: FormGroup;
  public records: any = [];
  public pagetitle: string = "GreenIT Application Challenge";
 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private csvService: CsvServicesService,
    private ToastrServiceService: ToastrServiceService
    ) {}

    ngOnInit(): void {
      
      // Call the function to fetch last inserted increment id
      this.getLastCsvInsertedId();



      /**
       * Validating the form fields
       */
      this.form = new FormGroup({
        name: new FormControl('', [ Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]*$/)]),
        state: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern(/^[a-zA-Z\s]*$/)]),
        zip: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(/^[0-9]+$/)]),
        amount: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern(/^\d+\.?\d*$/)]),
        qty: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern(/^[0-9]+$/)]),
        //item: new FormControl('', [Validators.required, Validators.minLength(3)])
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
  
    
/**
  * getFormfield
  * convenience getter for easy access to form fields
  * Creating a get property like 'getFormfield'
  */
 get getFormfield(){
      //set the item number value in the form
      this.form.controls['item'].setValue("ITEMNO"+this.records.data);
      this.form.controls['item'].disable();
      return this.form.controls;
    }

/**
 * getLastCsvInsertedId
 * Get the last CSV inserted increment id
 */
getLastCsvInsertedId(){
  this.csvService.getLastInsertedRecord().subscribe(data => {
  this.records = data
  console.log(this.records.data);
  })
}

    
  /**
   * saveOrder
   * Post the form value
   * Add record in CSV file
  */

    saveOrder(){
      this.csvService.addCsvOrder(this.form.getRawValue()).subscribe((res: any) =>{      
        if(res.error==false){
          this.ToastrServiceService.showSuccess('Order added successully!');
          this.router.navigateByUrl('/');
        }else{
          this.ToastrServiceService.showError('Please enter the required field');
        }
      })
  }

}
