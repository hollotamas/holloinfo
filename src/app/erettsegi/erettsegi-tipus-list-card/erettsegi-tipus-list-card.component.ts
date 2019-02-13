import { Component, Input, OnInit } from '@angular/core';
import { ErettsegiModel } from '../../shared/erettsegi-model';
@Component({
  selector: 'app-erettsegi-tipus-list-card',
  templateUrl: './erettsegi-tipus-list-card.component.html',
  styleUrls: ['./erettsegi-tipus-list-card.component.css']
})
export class ErettsegiTipusListCardComponent implements OnInit {
  @Input() _post: ErettsegiModel;
  constructor() { }

  ngOnInit() {
  }

}
