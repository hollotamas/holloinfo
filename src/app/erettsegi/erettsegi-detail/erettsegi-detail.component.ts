import { Component, OnInit } from '@angular/core';
import { ErettsegiModel} from '../../shared/erettsegi/erettsegi-model';
import { ErettsegiService } from '../../shared/erettsegi/erettsegi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-erettsegi-detail',
  templateUrl: './erettsegi-detail.component.html',
  styleUrls: ['./erettsegi-detail.component.css']
})
export class ErettsegiDetailComponent implements OnInit {
  private erettsegiPost: ErettsegiModel;

  constructor(private _route: ActivatedRoute,
              private _erettsegiService: ErettsegiService) {

  }

  ngOnInit() {
    this.erettsegiPost = this._erettsegiService.getErettsegiById(3)
  }

}
