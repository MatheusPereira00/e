import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService } from 'src/app/components/services/categorias.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-add-edit-category',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.scss']
})
export class AddEditCategoryComponent implements OnInit {

  public form: FormGroup = new FormGroup ({});

  public id!: string | null;
  public isEditMode = false;
  
  constructor(private activedRoute: ActivatedRoute, private categoriasService: CategoriasService, private fb: FormBuilder, private router: Router){}
  
  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });

    this.id = this.activedRoute.snapshot.paramMap.get('id');
    if(this.id){
      this.isEditMode = true;
      this.categoriasService.getCategoryById(+this.id).pipe(take(1)).subscribe(category =>{
        this.form.patchValue({name: category[0].name})
      });
    } else {
      this.isEditMode = false;
    }    
  }

  onSubmit(){
    if(this.isEditMode){
      const formData = this.form.getRawValue();
      this.categoriasService.updateCategory(+this.id!, formData).pipe(take(1)).subscribe();
    } 
    if(!this.isEditMode){
      const formData = this.form.getRawValue();
      this.categoriasService.postCategory(formData).pipe(take(1)).subscribe();
    }
    this.router.navigate(['adm/categories']);
  }
}
