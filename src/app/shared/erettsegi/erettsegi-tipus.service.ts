import { Injectable } from '@angular/core';
import { ErettsegiTipusModel } from './erettsegi-tipus-model';
import { ErettsegiSzoftverModel } from './erettsegi-szoftver-model';
import { ErettsegiSzoftverService } from './erettsegi-szoftver.service';

@Injectable({
  providedIn: 'root'
})
export class ErettsegiTipusService {
  private _erettsegiTipus: ErettsegiTipusModel[];
  //private _erettsegiSzoftverService: ErettsegiSzoftverService = new ErettsegiSzoftverService();

  constructor( private _erettsegiSzoftverService: ErettsegiSzoftverService ) {
    this._erettsegiTipus = this.getMockTipus();
    //this.getAllErettsegiTipus();
  }
//
  getAllErettsegiTipus() {
    return this._erettsegiTipus.map(
      tipus => {
        return {
            ...tipus,
            szoftver: this._erettsegiSzoftverService.getErettsegiSzoftverById(tipus.szoftverId)
        };
      });
  }

  getErettsegiTipusById(id: number):ErettsegiTipusModel {
    this._erettsegiTipus = this.getAllErettsegiTipus();
    const eTip = this._erettsegiTipus.filter(x => x.id == id);
    return eTip.length > 0 ? eTip[0] : new ErettsegiTipusModel(ErettsegiTipusModel.emptyTipus);
  }

  private getMockTipus() {
    return [
        new ErettsegiTipusModel({
          id: 1,
          tipusNev: 'Szövegszerkesztés',
          szoftverId: 1
        }),
        new ErettsegiTipusModel({
          id: 2,
          tipusNev: 'Prezentáció',
          szoftverId: 2
        }),
        new ErettsegiTipusModel({
          id: 3,
          tipusNev: 'Webszerkesztés',
          szoftverId: 3
        }),
        new ErettsegiTipusModel({
          id: 4,
          tipusNev: 'Táblázatkezelés',
          szoftverId: 4
        }),
        new ErettsegiTipusModel({
          id: 5,
          tipusNev: 'Adatbázis-kezelés',
          szoftverId: 5
        }),
        new ErettsegiTipusModel({
          id: 6,
          tipusNev: 'Programozás',
          szoftverId: 6
        })
    ];
  }
}
