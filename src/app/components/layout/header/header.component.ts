import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { SearchComponent } from '../../shared/search/search.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [SearchComponent, RouterLink],
})
export class HeaderComponent implements OnInit {
  public localStorageTheme!: string | null;
  public isDarkTheme = true;

  constructor(public cartService: CartService) {
  }

  ngOnInit(): void {
    const theme = localStorage.getItem('theme')
    if(theme){
      if(theme === 'true'){
        this.isDarkTheme = true
        document.body.setAttribute('data-theme','dark');
      } else {
        document.body.setAttribute('data-theme','theme');
        this.isDarkTheme = false
      }
    }
  }

  onThemeSwitchChange() {
  
    this.isDarkTheme = !this.isDarkTheme;

    localStorage.setItem('theme', JSON.stringify(this.isDarkTheme));

    document.body.setAttribute('data-theme', this.isDarkTheme ? 'dark' : 'theme');

    this.localStorageTheme;
    
  }
}
