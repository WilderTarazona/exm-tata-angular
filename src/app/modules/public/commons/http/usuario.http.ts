import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PublicHttpModule } from './http.module';
import { IUsuarioInfoResponse } from '@tata/commons/services';
import { Observable } from 'rxjs/internal/Observable';
import { delay } from 'rxjs/internal/operators/delay';


@Injectable({
  providedIn: PublicHttpModule
})
export class UsuarioHttp {

  constructor(private http: HttpClient) {}

  getInfo(): Observable<IUsuarioInfoResponse> {
    return this.http.get<IUsuarioInfoResponse>('assets/data/user-info.json')
      .pipe(delay(3000));
  }
}
