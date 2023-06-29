import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from "../../../../../shared/table/table.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-list-subcategorias',
    standalone: true,
    templateUrl: './list-subcategorias.component.html',
    styleUrls: ['./list-subcategorias.component.scss'],
    imports: [CommonModule, TableComponent, RouterLink]
})
export class ListSubcategoriasComponent {
    categoryColuns = ['Nome da categoria','Nome da subcategoria', 'id']
    categoryKeys = [ 'category','subcategory','id']
    categoryData = [{}]
    
    delet(id: string){
        console.log('delet acionado')
    }

    edit(id: string){
        console.log('edit acionado')
    }
}
