import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SubcategoriasService } from 'src/app/components/services/subcategorias.service';
import { subCategory } from 'src/app/components/models/subcategory';
import { take } from 'rxjs';
import { DialogEditComponent } from "../list-categorias/dialog-edit/dialog-edit.component";

@Component({
    selector: 'app-list-subcategorias',
    standalone: true,
    templateUrl: './list-subcategorias.component.html',
    styleUrls: ['./list-subcategorias.component.scss'],
    imports: [CommonModule, RouterLink, DialogEditComponent]
})
export class ListSubcategoriasComponent implements OnInit {
  public subCategories: subCategory[] = [];
  public id!: number;

  constructor(private subcategoriaService: SubcategoriasService) {}


  public ngOnInit(): void {
    this.getSubCategorys();
  }

  @ViewChild(DialogEditComponent)
  public dialogEditComponent!: DialogEditComponent;


  public getSubCategorys(): void {
    this.subcategoriaService.getSubCategorys().subscribe(data => {
      this.subCategories = data;
    });
  }

   public openModal(id: number): void {
    this.id = id;
    this.dialogEditComponent.toogleModal = true;
  }

  public close(): void {
    this.dialogEditComponent.toogleModal = false;
  }

    public delet(): void {
    this.subcategoriaService.deletesubCategory(this.id).pipe(take(1)).subscribe();
    this.subcategoriaService.getSubCategorys().subscribe(data => {
      this.subCategories = data;
    });
  }
}
