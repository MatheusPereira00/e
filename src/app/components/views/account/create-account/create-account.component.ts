import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
  standalone: true,
  providers: [RouterLink],
  imports: []
})
export class CreateAccountComponent {
  constructor(private router: Router ) { }
}
