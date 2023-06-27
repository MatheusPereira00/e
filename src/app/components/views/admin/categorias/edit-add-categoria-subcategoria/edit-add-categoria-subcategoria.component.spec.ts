import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddCategoriaSubcategoriaComponent } from './edit-add-categoria-subcategoria.component';

describe('EditAddCategoriaSubcategoriaComponent', () => {
  let component: EditAddCategoriaSubcategoriaComponent;
  let fixture: ComponentFixture<EditAddCategoriaSubcategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EditAddCategoriaSubcategoriaComponent]
    });
    fixture = TestBed.createComponent(EditAddCategoriaSubcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
