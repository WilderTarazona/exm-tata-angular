import { Injectable } from '@angular/core';
import { IIdentityResponse } from './interfaces/identity-response.interface';
import { IUsuarioInfoResponse } from './interfaces/usuario-info-response.interface';
import { CustomLocalStorage } from '../../utils';


@Injectable()
export class TataSessionService {
  // private _keyIdentity: string;
  private _keyUser: string;

  // get identity(): IIdentityResponse | null {
  //   return CustomLocalStorage.get(this._keyIdentity);
  // }

  get user(): IUsuarioInfoResponse | null {
    return CustomLocalStorage.get(this._keyUser);
  }

  get isAuthenticated(): boolean {
    return !!this.user;
  }

  constructor() {
    // this._keyIdentity = 'identity';
    this._keyUser = 'userInfo';
  }

  // saveIdentity(data: IIdentityResponse): void {
  //   CustomLocalStorage.set(this._keyIdentity, data);
  // }

  saveUser(data: IUsuarioInfoResponse): void {
    CustomLocalStorage.set(this._keyUser, data);
  }

  destroy(): void {
    CustomLocalStorage.clear();
  }
}
