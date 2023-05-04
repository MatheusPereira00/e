import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  name = new FormControl('');


  constructor( private formBuilder: FormBuilder) {}

  public cadastroForm: FormGroup = this.formBuilder.group({
    firstName: ['']
  })
  
  public submitForm() {
    console.log (this.cadastroForm)
  }
}
