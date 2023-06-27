import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddCategoriaComponent } from './edit-add-categoria.component';

describe('EditAddCategoriaComponent', () => {
  let component: EditAddCategoriaComponent;
  let fixture: ComponentFixture<EditAddCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EditAddCategoriaComponent]
    });
    fixture = TestBed.createComponent(EditAddCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
