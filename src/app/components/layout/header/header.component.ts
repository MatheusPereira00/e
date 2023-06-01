import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
// import { JSDocComment } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public localStorageTheme!: string | null;
  public isDarkTheme = true;

  constructor(public cartService: CartService) {
    // const darkTheme = localStorage.getItem('dark-theme')
    // darkTheme ? JSON.parse(darkTheme): false
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
  // public toggle() {
  // document.body.classList.toggle('dark-theme');
  // localStorage.getItem('toogle', JSDocComment(this.toogle));
  // localStorage.setItem('toogle',JSON.stringify('dark-theme'));
  // }
  onThemeSwitchChange() {
    // const darkTheme = JSON.parse(localStorage.getItem('data-theme'));

    this.isDarkTheme = !this.isDarkTheme;

    localStorage.setItem('theme', JSON.stringify(this.isDarkTheme));

    document.body.setAttribute('data-theme', this.isDarkTheme ? 'dark' : 'theme');

    this.localStorageTheme;
    
    // console.log(this.localStorageTheme)

    // localStorage.setItem('data-theme', JSON.stringify(dataTheme))

    // localStorage.setItem('data-theme', JSON.stringify(darkTheme));


  }
}
