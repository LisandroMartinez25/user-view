export interface IUser {
  id?: number;
  name?: string;
  fathersLastName?: string;
  mothersLastName?: string;
  picture?: string;
  email?: string;
  roleId?: number;
  active?: boolean;
  role?: IRole;
}

export interface IRole {
  id?: number;
  position: string;
}