import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { ErettsegiModel} from '../../shared/erettsegi/erettsegi-model';
import { ErettsegiService } from '../../shared/erettsegi/erettsegi.service';

@Component({
  selector: 'app-erettsegi-detail',
  templateUrl: './erettsegi-detail.component.html',
  styleUrls: ['./erettsegi-detail.component.css']
})
export class ErettsegiDetailComponent implements OnInit {
  public _erettsegiPost: ErettsegiModel;

  constructor(private _route: ActivatedRoute,
              private _erettsegiService: ErettsegiService) {
  }

  ngOnInit() {
    const postID = +this._route.snapshot.params['postID'];
    if (postID) {
      if (postID != 0) {
        this._erettsegiPost = this._erettsegiService.getErettsegiById(postID);
      } else {
        this._erettsegiPost = new ErettsegiModel(ErettsegiModel.emptyErettsegi);
      }
    } else {
      this._erettsegiPost = new ErettsegiModel(ErettsegiModel.emptyErettsegi);
    }
    console.log(this._erettsegiPost);
  }

}
