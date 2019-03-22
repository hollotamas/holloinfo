export class ErettsegiSzintModel {
  id: number;
  szintNev: string;
  szintKep: string;

  constructor(param?: ErettsegiSzintModel) {
    if (param) {
        Object.assign(this, param);
    }
  }

  static get emptySzint(): ErettsegiSzintModel {
    return {
      id: 0,
      szintNev: '',
      szintKep: ''
    };
  }
}
