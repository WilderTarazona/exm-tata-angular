export interface IUsuarioInfoResponse {
  idUsuario: number;
  nombres: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  fullName: string;
  idArea: number;
  correo: string;
  empresa: string;
  roles: IRoles[];
  rutas: IRuta[];
}

export interface IRoles {
  id: number;
  nombre: string;
}

export interface IRuta {
  id: number;
  idPadre?: number;
  nombre: string;
  icono: string;
  url: string;
  esMenu: boolean;
  hijos?: IRuta[];
  acciones?: IAccion[];
}

export interface IAccion {
  id: number;
  codigo: string;
  nombre: string;
}
