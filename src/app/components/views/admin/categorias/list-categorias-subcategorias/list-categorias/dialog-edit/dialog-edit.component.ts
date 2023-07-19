import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { CategoriasService } from 'src/app/components/services/categorias.service';
import { take } from 'rxjs';
import { Category } from 'src/app/components/models/category';

@Component({
  selector: 'app-dialog-edit',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.scss'],
})
export class DialogEditComponent implements OnInit{
  @Output() public close = new EventEmitter();
  @Output() public delet = new EventEmitter();
  public toogleModal = false;
  public categories: Category[]= [];
  
  constructor(private categoriasService: CategoriasService) {}

  public ngOnInit(): void {
    
  }

  public openDialog(): void {
    this.toogleModal = true;
  }

  public closeModal(): void {
    this.close.emit();
  }

  public deleteCategory(): void {
    this.delet.emit();
    this.toogleModal = false;
    this.close.emit();
  }

  public getCategorys(): void {
    this.categoriasService.getCategorys().subscribe(data => {
      this.categories = data;
    });
  }

}
