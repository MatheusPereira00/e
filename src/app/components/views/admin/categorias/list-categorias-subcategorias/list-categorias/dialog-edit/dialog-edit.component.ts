import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { CategoriasService } from 'src/app/components/services/categorias.service';
import { Category } from 'src/app/components/models/category';

@Component({
  selector: 'app-dialog-edit',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.scss'],
})
export class DialogEditComponent {
  @Output() public Close = new EventEmitter();
  @Output() public delet = new EventEmitter();
  public toogleModal = false;
  public categories: Category[] = [];

  constructor(private categoriasService: CategoriasService) {}

  public openDialog(): void {
    this.toogleModal = true;
  }

  public closeModal(): void {
    this.Close.emit();
  }

  public deleteCategory(): void {
    this.delet.emit();
    this.toogleModal = false;
    this.Close.emit();
  }

  public getCategorys(): void {
    this.categoriasService.getCategorys().subscribe(data => {
      this.categories = data;
    });
  }
}
