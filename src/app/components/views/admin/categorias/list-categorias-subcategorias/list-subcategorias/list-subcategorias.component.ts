import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from 'src/app/components/models/product-interface';
import { SubcategoriasService } from 'src/app/components/services/subcategorias.service';

@Component({
    selector: 'app-list-subcategorias',
    standalone: true,
    templateUrl: './list-subcategorias.component.html',
    styleUrls: ['./list-subcategorias.component.scss'],
    imports: [CommonModule, RouterLink]
})
export class ListSubcategoriasComponent {

    constructor(private subcategoriaService: SubcategoriasService){}

    public products: Product[]=[];

    ngOnInit(): void {
        this.getSubCategorys();
      }

    public getSubCategorys() {
        this.subcategoriaService.getSubCategorys().subscribe(data => {
          this.products = data;
        });
      }
    
      
    delet(id: string){
        console.log('delet acionado')
    }
}
