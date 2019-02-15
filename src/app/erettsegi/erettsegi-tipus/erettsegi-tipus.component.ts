import { Component, OnInit } from '@angular/core';
import { ErettsegiTipusModel } from '../../shared/erettsegi/erettsegi-tipus-model';
import { ErettsegiTipusService } from '../../shared/erettsegi/erettsegi-tipus.service';

@Component({
  selector: 'app-erettsegi-tipus',
  templateUrl: './erettsegi-tipus.component.html',
  styleUrls: ['./erettsegi-tipus.component.css']
})
export class ErettsegiTipusComponent implements OnInit {
  public erettsegiTipusok: ErettsegiTipusModel[];

  constructor(private _erettsegiTipusService: ErettsegiTipusService) {
  }

  ngOnInit() {
    this.erettsegiTipusok = this._erettsegiTipusService.getAllErettsegiTipus();
    //console.log(this.erettsegiTipusok);
  }

}
