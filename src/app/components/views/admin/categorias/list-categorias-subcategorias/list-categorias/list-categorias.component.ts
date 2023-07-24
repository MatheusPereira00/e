import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasService } from 'src/app/components/services/categorias.service';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component';
import { RouterLink } from '@angular/router';
import { take } from 'rxjs';
import { Category } from 'src/app/components/models/category';

@Component({
  selector: 'app-list-categorias',
  standalone: true,
  templateUrl: './list-categorias.component.html',
  styleUrls: ['./list-categorias.component.scss'],
  imports: [CommonModule, DialogEditComponent, RouterLink],
})
export class ListCategoriasComponent implements OnInit {
  public categories: Category[] = [];

  constructor(private categoriasService: CategoriasService) {}

  @ViewChild(DialogEditComponent)
  public dialogEditComponent!: DialogEditComponent;

  public ngOnInit(): void {
    this.getCategorys();
  }

  public getCategorys(): void {
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

  public deleteCategory(id: number): void {
    this.categoriasService.deleteCategory(id).pipe(take(1)).subscribe();
    this.getCategorys();
  }
}
