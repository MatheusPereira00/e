import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from "../../views/account/login/login.component";
import { CreateAccountComponent } from "../../views/account/create-account/create-account.component";

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html',
    styleUrls: ['./authentication.component.scss'],
    standalone: true,
    providers: [],
    imports: [LoginComponent, CreateAccountComponent]
})
export class AuthenticationComponent {
  constructor(private router: Router){}
}
