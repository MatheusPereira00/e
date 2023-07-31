import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CustomValidationMessageComponent } from '../../custom-validation-message/custom-validation-message.component';
import { UsuarioService } from 'src/app/components/services/usuario.service';
import { newUsuario } from 'src/app/components/models/usuario';
import { NgIf } from '@angular/common';
import { PopupComponent } from '../../../shared/popup/popup.component';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
  standalone: true,
  providers: [],
  imports: [
    ReactiveFormsModule,
    CustomValidationMessageComponent,
    RouterLink,
    NgIf,
    PopupComponent,
  ],
})
export class CreateAccountComponent {
  public usuario: newUsuario[] = [];

  constructor(private router: Router, private usuarioService: UsuarioService) {}

  @ViewChild(PopupComponent)
  public popupComponent!: PopupComponent;

  public formCreate = new FormGroup({
    nome: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    nomeSocial: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    cpf: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    dataNascimento: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    telefone: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    senha: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    Confirmar: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  public postUsuario(): void {
    if (this.formCreate.valid) {
      const newUsuario = this.formCreate.getRawValue();
      this.usuarioService.postUsuario(newUsuario).subscribe({
        next: () => {
          this.postUsuario;
          this.popupComponent.tooglePopup = true;
        },
      });
    } else {
      this.popupComponent.toogleError = true;
    }
  }
}
