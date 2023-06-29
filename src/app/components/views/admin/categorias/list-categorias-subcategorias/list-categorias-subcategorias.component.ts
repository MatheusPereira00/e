import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCategoriasComponent } from "./list-categorias/list-categorias.component";
import { ListSubcategoriasComponent } from "./list-subcategorias/list-subcategorias.component";
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-list-categorias-subcategorias',
    standalone: true,
    templateUrl: './list-categorias-subcategorias.component.html',
    styleUrls: ['./list-categorias-subcategorias.component.scss'],
    imports: [CommonModule, ListCategoriasComponent, ListSubcategoriasComponent, RouterLink]
})
export class ListCategoriasSubcategoriasComponent {
}
