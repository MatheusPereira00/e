import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasService, Category } from 'src/app/components/services/categorias.service';
import { CartService } from 'src/app/components/services/cart.service';
import { DialogComponent } from "../../../../../shared/dialog/dialog.component";
import { DialogEditComponent } from './dialog-edit/dialog-edit.component';
import { RouterLink } from '@angular/router';
import { take } from 'rxjs';


@Component({
    selector: 'app-list-categorias',
    standalone: true,
    templateUrl: './list-categorias.component.html',
    styleUrls: ['./list-categorias.component.scss'],
    imports: [CommonModule, DialogEditComponent, RouterLink]
})
export class ListCategoriasComponent implements OnInit {
  
  constructor(private categoriasService: CategoriasService, private cartService: CartService){}
  
  public categories: Category[]=[];

  @ViewChild(DialogEditComponent)
  public dialogEditComponent !: DialogEditComponent;

    ngOnInit(): void {
        this.getCategorys();
      }

    public getCategorys() {
        this.categoriasService.getCategorys().subscribe(data => {
          this.categories = data;
        });
      }
    
      public openModal(): void {
        this.dialogEditComponent.toogleModal = true;
      }
    
      public close(): void {
        this.dialogEditComponent.toogleModal = false;
      }

      public deleteCategory(id: number){
        this.categoriasService.deleteCategory(id).pipe(take(1)).subscribe();
        this.getCategorys();
      }
  }
