import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasService } from '../../services/categorias.service';
import { Product } from '../../models/product-interface';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() colunmNames: string[] = []
  @Input() colunmKeys: string[] = []
  @Input() rowData: any[] = []

  public products: Product[]=[];

  @Output() onClickEditEvent: EventEmitter<string> = new EventEmitter()
  @Output() onClickDeletEvent: EventEmitter<string> = new EventEmitter()


  ngOnInit(){
    this.getProduct()
  }
  constructor(private categoriasService: CategoriasService){}
  onClickEdit(id: string){
    this.onClickEditEvent.emit(id)
  }
  onClickDelet(id: string){
    this.onClickDeletEvent.emit(id)
    
  }

  public getProduct(){
    this.categoriasService.getProduct().subscribe (data => {
      this.products = data
    })
  }
}
