import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddSubcategoriaComponent } from './edit-add-subcategoria.component';

describe('EditAddSubcategoriaComponent', () => {
  let component: EditAddSubcategoriaComponent;
  let fixture: ComponentFixture<EditAddSubcategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EditAddSubcategoriaComponent]
    });
    fixture = TestBed.createComponent(EditAddSubcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
