import { Injectable } from '@angular/core';
import { ErettsegiSzoftverModel } from './erettsegi-szoftver-model';

@Injectable({
  providedIn: 'root'
})
export class ErettsegiSzoftverService {
  private _erettsegiSzoftver: ErettsegiSzoftverModel[];

  constructor() {
    this._erettsegiSzoftver = this.getMockSzoftver();
  }

  getAllErettsegiSzoftver() {
    return this._erettsegiSzoftver;
  }

  getErettsegiSzoftverById(id: number): ErettsegiSzoftverModel {
    const erSzoft = this._erettsegiSzoftver.filter(x => x.id == id);
    return erSzoft.length > 0 ? erSzoft[0] : new ErettsegiSzoftverModel(ErettsegiSzoftverModel.emptySzoftver);
  }

  private getMockSzoftver() {
    return [
      {
        id: 1,
        szoftverNev: 'Office Word 2016',
        logoUtvonal: './assets/images/erettsegi/word.png'
      },
      {
        id: 2,
        szoftverNev: 'Office PowerPoint 2016',
        logoUtvonal: './assets/images/erettsegi/ppt.png'
      },
      {
        id: 3,
        szoftverNev: 'Office Excel 2016',
        logoUtvonal: './assets/images/erettsegi/tabl.png'
      },
      {
        id: 4,
        szoftverNev: 'Office Access 2016',
        logoUtvonal: './assets/images/erettsegi/adatb.png'
      },
      {
        id: 5,
        szoftverNev: 'Office SharePoint 2007',
        logoUtvonal: './assets/images/erettsegi/sharepoint.png'
      },
      {
        id: 6,
        szoftverNev: 'Python 3',
        logoUtvonal: './assets/images/erettsegi/python.png'
      }
    ];
  }
}
