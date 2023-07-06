import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasService } from 'src/app/components/services/categorias.service';
import { Product } from 'src/app/components/models/product-interface';


@Component({
  selector: 'app-list-categorias',
  standalone: true,
  templateUrl: './list-categorias.component.html',
  styleUrls: ['./list-categorias.component.scss'],
  imports: [CommonModule]
})
export class ListCategoriasComponent implements OnInit {
  
  constructor(private categoriasService: CategoriasService){}
  
  public products: Product[]=[];

    ngOnInit(): void {
        this.getCategorys();
      }

    public getCategorys() {
        this.categoriasService.getCategorys().subscribe(data => {
          this.products = data;
        });
      }
    

    delet(id: string){
        console.log('delet acionado')
    }

    edit(id: string){
        console.log('edit acionado')
    }

@Component({
    selector: 'app-list-categorias',
    standalone: true,
    templateUrl: './list-categorias.component.html',
    styleUrls: ['./list-categorias.component.scss'],
    imports: [CommonModule]
})
export class ListCategoriasComponent {
}
