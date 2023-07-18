import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SubcategoriasService } from 'src/app/components/services/subcategorias.service';
import { subCategory } from 'src/app/components/models/subcategory';
import { take } from 'rxjs';

@Component({
  selector: 'app-list-subcategorias',
  standalone: true,
  templateUrl: './list-subcategorias.component.html',
  styleUrls: ['./list-subcategorias.component.scss'],
  imports: [CommonModule, RouterLink],
})
export class ListSubcategoriasComponent {
  constructor(private subcategoriaService: SubcategoriasService) {}

  public subCategories: subCategory[] = [];

  public ngOnInit(): void {
    this.getSubCategorys();
  }

  public getSubCategorys(): void {
    this.subcategoriaService.getSubCategorys().subscribe(data => {
      this.subCategories = data;
    });
  }

  public deletesubCategory(id: number): void {
    this.subcategoriaService.deletesubCategory(id).pipe(take(1)).subscribe();
    this.getSubCategorys();
  }
}
