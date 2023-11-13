export interface IMenuOption {
  title: string;
  icon?: string;
  url?: string;
  baseUrl?: string;
  options?: IMenuOption[];
  // evento?: (params: any) => void;
}
