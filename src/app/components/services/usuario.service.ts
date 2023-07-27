import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { newUsuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}
  private UrlUsuario = 'http://localhost:3000/usuario';

  public getUsuario(): Observable<newUsuario[]> {
    return this.http.get<newUsuario[]>(this.UrlUsuario);
  }

  public postUsuario(usuario: newUsuario): Observable<newUsuario> {
    return this.http.post<newUsuario>(this.UrlUsuario, usuario);
  }
}
