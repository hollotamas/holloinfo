import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { ErettsegiModel} from '../../shared/erettsegi/erettsegi-model';
import { ErettsegiService } from '../../shared/erettsegi/erettsegi.service';
import { ErettsegiSzintModel } from '../../shared/erettsegi/erettsegi-szint-model';
import { ErettsegiSzintService } from '../../shared/erettsegi/erettsegi-szint.service';
import { ErettsegiTipusModel } from '../../shared/erettsegi/erettsegi-tipus-model';
import { ErettsegiTipusService } from '../../shared/erettsegi/erettsegi-tipus.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-erettsegi-detail',
  templateUrl: './erettsegi-detail.component.html',
  styleUrls: ['./erettsegi-detail.component.css']
})
export class ErettsegiDetailComponent implements OnInit {
  public _erettsegiPost: ErettsegiModel;
  public _bsValue = new Date();
  public _erettsegiSzint: ErettsegiSzintModel[];
  public _erettsegiTipus: ErettsegiTipusModel[];

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _erettsegiService: ErettsegiService,
              private _erettsegiSzintService: ErettsegiSzintService,
              private _erettsegiTipusService: ErettsegiTipusService,
              private _sanitizer: DomSanitizer,
              private _location: Location) {
  }

  ngOnInit() {
    const postID = +this._route.snapshot.params['postID'];
    this._erettsegiSzint = this._erettsegiSzintService.getAllErettsegiSzint();
    this._erettsegiTipus = this._erettsegiTipusService.getAllErettsegiTipus();
    if (postID) {
      if (postID != 0) {
        this._erettsegiPost = this._erettsegiService.getErettsegiById(postID);
        //this._erettsegiPost.video =  this._sanitizer.bypassSecurityTrustResourceUrl(this._erettsegiPost.video);
      } else {
        this._erettsegiPost = new ErettsegiModel(ErettsegiModel.emptyErettsegi);
      }
    } else {
      this._erettsegiPost = new ErettsegiModel(ErettsegiModel.emptyErettsegi);
    }
    //console.log(this._erettsegiPost);
    //console.log(this._bsValue);
  }

  onSubmit(erettsegiForm) {
    if (this._erettsegiPost.id == 0) {
      //console.log('uj bejegyzés');
      this._erettsegiService.create(this._erettsegiPost);
    } else {
      //console.log('módosított bejegyzés');
      this._erettsegiService.update(this._erettsegiPost);
    }

    //console.log('Form adat',erettsegiForm);
    //ez nem működik
      this._location.back();


  }

}
