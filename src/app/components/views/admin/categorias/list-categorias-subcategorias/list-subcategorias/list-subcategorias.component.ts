import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-list-subcategorias',
    standalone: true,
    templateUrl: './list-subcategorias.component.html',
    styleUrls: ['./list-subcategorias.component.scss'],
    imports: [CommonModule, RouterLink]
})
export class ListSubcategoriasComponent {

}
