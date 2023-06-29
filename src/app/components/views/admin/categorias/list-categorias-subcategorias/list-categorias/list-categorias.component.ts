import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from "../../../../../shared/table/table.component";

@Component({
    selector: 'app-list-categorias',
    standalone: true,
    templateUrl: './list-categorias.component.html',
    styleUrls: ['./list-categorias.component.scss'],
    imports: [CommonModule, TableComponent]
})
export class ListCategoriasComponent {
    categoryColuns = ['Nome da categoria', 'id']
    categoryKeys = ['name','id']
    categoryData = ['name','id']

    delet(id: string){
        console.log('delet acionado')
    }

    edit(id: string){
        console.log('edit acionado')
    }
}
