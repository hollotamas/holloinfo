export class ErettsegiSzoftverModel {
  id: number;
  szoftverNev: string;
  logoUtvonal: string;

  constructor(param?: ErettsegiSzoftverModel) {
    if (param) {
      Object.assign(this, param);
    }
  }

  static get emptySzoftver(): ErettsegiSzoftverModel {
    return {
      id: 0,
      szoftverNev: '',
      logoUtvonal: ''
    };
  }
}
