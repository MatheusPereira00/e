import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasService } from 'src/app/components/services/categorias.service';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component';
import { RouterLink } from '@angular/router';
import { Category } from 'src/app/components/models/category';
import { take } from 'rxjs';

@Component({
  selector: 'app-list-categorias',
  standalone: true,
  templateUrl: './list-categorias.component.html',
  styleUrls: ['./list-categorias.component.scss'],
  imports: [CommonModule, DialogEditComponent, RouterLink],
})
export class ListCategoriasComponent implements OnInit {
  public categories: Category[] = [];
  public id!: number;

  constructor(
    private categoriasService: CategoriasService
    ) {}

    public ngOnInit(): void {
      this.getCategorys();
    }
    
  @ViewChild(DialogEditComponent)
  public dialogEditComponent!: DialogEditComponent;


  public getCategorys(): void {
    this.categoriasService.getCategorys().subscribe(data => {
      this.categories = data;
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
    this.categoriasService.deleteCategory(this.id).pipe(take(1)).subscribe();
    this.categoriasService.getCategorys().subscribe(data => {
      this.categories = data;
    });
  }

}
