import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input() public paginaAtual: number = 1;
  @Input() public qtdPorPagina: number = 5;
  @Input() public totalRegistros: number = 10;
  @Output() public onPaginate: EventEmitter<number> = new EventEmitter<number>(); // Emite o numero da página clicada

  constructor(private route: ActivatedRoute){}
}


