export class UserModel {
  id: number;
  name: string;
  email: string;
  cim: string;
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
      cim: '1000 Kerekerdő, Fa sor 3.',
      jogosultsag: 0
    };
  }
}
