import { Injectable } from '@angular/core';
import { ErettsegiSzintModel } from './erettsegi-szint-model';

@Injectable({
  providedIn: 'root'
})
export class ErettsegiSzintService {
  private _erettsegiSzint: ErettsegiSzintModel[];

  constructor() {
    this._erettsegiSzint = this.getMockSzint();
  }

  getAllErettsegiSzint() {
    return this._erettsegiSzint;
  }

  getErettsegiSzintById(id: number): ErettsegiSzintModel {
    const eSzint = this._erettsegiSzint.filter(x => x.id == id);
    return eSzint.length > 0 ? eSzint[0] : new ErettsegiSzintModel(ErettsegiSzintModel.emptySzint);
  }

  private getMockSzint() {
    return [
      new ErettsegiSzintModel({
        id: 1,
        szintNev: 'középszint',
        szintKep: './assets/images/erettsegi/kbetu.png'
      }),
      new ErettsegiSzintModel({
        id: 2,
        szintNev: 'emeltszint',
        szintKep: './assets/images/erettsegi/ebetu.png'
      })
    ];
  }
}
