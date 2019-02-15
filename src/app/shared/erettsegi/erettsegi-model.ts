import { ErettsegiTipusModel } from './erettsegi-tipus-model';
import { ErettsegiSzintModel } from './erettsegi-szint-model';

export class ErettsegiModel {
  id: number;
  cim: string;
  leiras: string;
  feladatUrl: string;
  forrasUrl: string;
  video: string;
  megjegyzes: string;
  bejegyzesKeszult: string; //Date
  erettsegiIdopont: string; //Date
  tipusId: number; //szövegszerkesztés, stb...
  tipus?: ErettsegiTipusModel;
  szintId: number; //emelt, közép
  szint?: ErettsegiSzintModel;

  //param? létrejöhet paraméter nélküli példány
  constructor(param?: ErettsegiModel) {
    if (param) {
      Object.assign(this, param);
    }

  }
}