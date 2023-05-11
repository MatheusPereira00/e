import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {


  constructor( private formBuilder: FormBuilder) {}

  public cadastroForm: FormGroup = this.formBuilder.group({
    // name:['', Validators.required.name],
    // email: ['', Validators.required]

    email: ['', Validators.required]
  })
  
  get email(){
    return this.cadastroForm.get('email')
  }

  onSubmit(){
    console.log(this.cadastroForm.value)
  }
}
