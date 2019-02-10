export class ErettsegiModel {
  id: number;
  cim: string;
  leiras: string;
  feladatUrl: string;
  forrasUrl: string;
  video: string;
  megjegyzes: string;
  bejegyzesKeszult: string; //Date
  erettsegIdopont: string; //Date
  szint: number; //emelt, közép
  tipus: number; //szövegszerkesztés, stb...

  //param? létrejöhet paraméter nélküli példány
  constructor(param?: ErettsegiModel) {
    if (param) {
      Object.assign(this, param);
    }

  }
}
