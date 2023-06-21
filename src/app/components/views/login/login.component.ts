import { Component } from '@angular/core';
import { CustomValidationMessageComponent } from "../custom-validation-message/custom-validation-message.component";
import { Router } from '@angular/router';



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    providers: [],
    imports: [CustomValidationMessageComponent]
})
export class LoginComponent {
    constructor(private router: Router) { }

    onLogin(){
        this.router.navigate(["/product"]);
    }
    onCadastro(){
        this.router.navigate(["/product"]);
    }
}


