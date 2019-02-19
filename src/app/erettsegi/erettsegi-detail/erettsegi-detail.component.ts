import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { ErettsegiModel} from '../../shared/erettsegi/erettsegi-model';
import { ErettsegiService } from '../../shared/erettsegi/erettsegi.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-erettsegi-detail',
  templateUrl: './erettsegi-detail.component.html',
  styleUrls: ['./erettsegi-detail.component.css',
              './bs-datepicker.css']
})
export class ErettsegiDetailComponent implements OnInit {
  public _erettsegiPost: ErettsegiModel;
  public _bsValue = new Date();

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _erettsegiService: ErettsegiService,
              private _sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    const postID = +this._route.snapshot.params['postID'];
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
    console.log(this._erettsegiPost);
    console.log(this._bsValue);
  }

  onSubmit(erettsegiForm) {
    if (this._erettsegiPost.id == 0) {
      console.log('uj bejegyzés');
      this._erettsegiService.create(this._erettsegiPost);
    } else {
      console.log('módosított bejegyzés');
      this._erettsegiService.update(this._erettsegiPost);
    }

    console.log('Form adat',erettsegiForm);
    this._router.navigate(['./erettsegi']);
  }

  formatDateSpicker(str) {
    return str.slice(0,4)+"-"+str.slice(5,7)+"-"+str.slice(8,10)+"T"+str.slice(11,16);
  }
}
