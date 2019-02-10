import { Component, OnInit } from '@angular/core';
import { ErettsegiService } from '../../shared/erettsegi.service';
import { ErettsegiModel } from '../../shared/erettsegi-model';

@Component({
  selector: 'app-erettsegi-tipus-list',
  templateUrl: './erettsegi-tipus-list.component.html',
  styleUrls: ['./erettsegi-tipus-list.component.css']
})
export class ErettsegiTipusListComponent implements OnInit {
  public erettsegi: ErettsegiModel[];

  constructor(private _erettsegiService: ErettsegiService) {
    this.erettsegi = this._erettsegiService.getAllErettsegi();
    console.log(this.erettsegi);
  }

  ngOnInit() {
  }

}
