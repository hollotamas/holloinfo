import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../shared/authentication.service';
import { ErettsegiModel } from '../../shared/erettsegi/erettsegi-model';
import { ErettsegiService } from '../../shared/erettsegi/erettsegi.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-erettsegi-post',
  templateUrl: './erettsegi-post.component.html',
  styleUrls: ['./erettsegi-post.component.css']
})
export class ErettsegiPostComponent implements OnInit {
  public _teljesPost: ErettsegiModel;
  public videoUrl;

  constructor(private _erettsegiService: ErettsegiService,
              private _route: ActivatedRoute,
              private _authenticationService: AuthenticationService,
              private _sanitizer: DomSanitizer) {

    //console.log(this._teljesPost);
    //console.log(this.videoUrl);
  }

  ngOnInit() {
    const postID = +this._route.snapshot.params['postID'];
    if (postID) {
      this._teljesPost = this._erettsegiService.getErettsegiById(postID);
    } else {
      this._teljesPost = new ErettsegiModel(ErettsegiModel.emptyErettsegi);
    }
    this.videoUrl =  this._sanitizer.bypassSecurityTrustResourceUrl(this._teljesPost.video);
  }

}
