import { Component, Input, OnInit } from '@angular/core';
import { ErettsegiTipusModel } from '../../shared/erettsegi/erettsegi-tipus-model';

@Component({
  selector: 'app-erettsegi-tipus-card',
  templateUrl: './erettsegi-tipus-card.component.html',
  styleUrls: ['./erettsegi-tipus-card.component.css']
})
export class ErettsegiTipusCardComponent implements OnInit {
  @Input() _tipus: ErettsegiTipusModel;

  constructor() { }

  ngOnInit() {
  }

}
