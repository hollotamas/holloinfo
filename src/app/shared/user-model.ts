export class UserModel {
  id: number;
  name: string;
  email: string;
  password: string;
  iskola: string;
  helyseg: string;
  jogosultsag: number; //0: full, 1: szerkesztő, 2: vendég

  constructor(param?: UserModel) {
    if (param) {
      Object.assign(this, param);
    }
  }

 //UserModel.peldaUser
  static get peldaUser(): UserModel {
    return {
      id: 0,
      name: 'Bruckner Szigfríd',
      email: 'example@example.com',
      password: 'Angular',
      iskola: 'Kerek Gimi',
      helyseg: 'Kerekerdő',
      jogosultsag: 0
    };
  }

  static get emptyUser(): UserModel {
    return {
      id:0,
      name: '',
      email: '',
      password: '',
      iskola: '',
      helyseg: '',
      jogosultsag: 0
    };
  }
}
