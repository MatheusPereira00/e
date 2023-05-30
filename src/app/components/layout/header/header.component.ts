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
  public isLightTheme = true;

  constructor(public cartService: CartService) {
    // const darkTheme = localStorage.getItem('dark-theme')
    // darkTheme ? JSON.parse(darkTheme): false
  }

  ngOnInit(): void {
    this.localStorageTheme =
      localStorage.getItem('theme') !== null ? localStorage.getItem('theme') : 'true';

    // console.log(this.localStorageTheme);
  }
  // public toggle() {
  // document.body.classList.toggle('dark-theme');
  // localStorage.getItem('toogle', JSDocComment(this.toogle));
  // localStorage.setItem('toogle',JSON.stringify('dark-theme'));
  // }
  onThemeSwitchChange() {
    // const darkTheme = JSON.parse(localStorage.getItem('data-theme'));

    this.isLightTheme = !this.isLightTheme;

    localStorage.setItem('theme', JSON.stringify(this.isLightTheme));

    document.body.setAttribute('data-theme', this.localStorageTheme ? 'light' : 'dark');

    this.localStorageTheme;
    console.log(this.isLightTheme);

    // console.log(this.localStorageTheme)

    // localStorage.setItem('data-theme', JSON.stringify(dataTheme))

    // localStorage.setItem('data-theme', JSON.stringify(darkTheme));
  }
}
