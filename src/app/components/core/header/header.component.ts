import { Component } from '@angular/core';
import { SearchComponent } from '../../shared/search/search.component';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [SearchComponent, RouterLink],
})
export class HeaderComponent {
  // public localStorageTheme!: string | null;
  public darkTheme!: string;

  constructor(public cartService: CartService) {
  }
  
  
  onThemeSwitchChange() {
    document.body.classList.toggle('dark-theme')
  }
  // implements OnInit
  // ngOnInit(): void {
  //   const isDarkTheme = localStorage.getItem('isDarkTheme')
  //   if(isDarkTheme){
  //     if(isDarkTheme=== 'true'){
  //       this.isDarkTheme = true
  //       document.body.setAttribute('data-theme','dark');
  //     } else {
  //       document.body.setAttribute('data-theme','theme');
  //       this.isDarkTheme = false
  //     }
  //   }
  // }

  //   onThemeSwitchChange() {

  //     this.isDarkTheme = !this.isDarkTheme;

  //     localStorage.setItem('isDarkTheme', JSON.stringify(this.isDarkTheme));

  //     document.body.setAttribute('isDarkTheme', this.isDarkTheme ? 'root' : 'dark-theme');

  //     this.localStorageTheme;

  //   }
}
