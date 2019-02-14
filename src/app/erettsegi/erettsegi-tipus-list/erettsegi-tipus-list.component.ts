import { Component, OnInit } from '@angular/core';
import { ErettsegiService } from '../../shared/erettsegi/erettsegi.service';
import { ErettsegiModel } from '../../shared/erettsegi/erettsegi-model';

@Component({
  selector: 'app-erettsegi-tipus-list',
  templateUrl: './erettsegi-tipus-list.component.html',
  styleUrls: ['./erettsegi-tipus-list.component.css']
})
export class ErettsegiTipusListComponent implements OnInit {
  public erettsegiCsoport3: ErettsegiModel[];

  constructor(private _erettsegiService: ErettsegiService) {

  }

  ngOnInit() {
    //Ez akkor fut le, amikor construktor lefutott
    //4-esével akarom tagolni a kapott adatokat
    //[0,1,2,3,4,5,6] --> reduce --> [[0,1,2,3],[4,5,6]]
    this.erettsegiCsoport3 = this._erettsegiService.getAllErettsegi()
    .reduce((acc, curr: ErettsegiModel, index: number)=>{ //index hanyadik elemnél tartunk
        //acc az új struktúra
        //curr az aktuális vizsgált elem
        if (index % 4 == 0) {
          acc.push([]); //Minden negyedik objektum után öres tömb
        }
        acc[acc.length-1].push(curr); //Mindig az utolsó tömb, utolsó elemébe kerül az új elem
        return acc;
      },[]); //[] tömb alakú a végeredmény
    console.log(this.erettsegiCsoport3);
    //this.erettsegiCsoport3.reduce(()=>{},[]);

  }

}
