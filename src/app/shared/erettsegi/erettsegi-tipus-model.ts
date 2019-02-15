import { ErettsegiSzoftverModel } from './erettsegi-szoftver-model';

export class ErettsegiTipusModel {
  id: number;
  tipusNev: string;
  szoftverId: number;
  szoftver?: ErettsegiSzoftverModel; 

  constructor(param?: ErettsegiTipusModel) {
    if (param) {
      Object.assign(this, param);
    }
  }

  static get emptyTipus(): ErettsegiTipusModel {
    return {
      id: 0,
      tipusNev: '',
      szoftverId: 0
    };
  }
}
