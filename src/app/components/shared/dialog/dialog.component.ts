import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  @Input() public image = '';
  @Output() public close = new EventEmitter();

  // mensagemAdicionado: string = '';
  public toogleModal = false;

  public ngOnInit(): void {
    console.log(this.image);
  }

  constructor() {}
  public openDialog(): void {
    this.toogleModal = true;
  }
  public fecharModal(): void {
    //this.dialogComponent.dismissAll();
    this.close.emit();
  }

  // public adicionar(): void {
  //   this.mensagemAdicionado = 'Adicionado';
  // }
}
