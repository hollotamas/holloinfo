import { Component, Input, OnInit } from '@angular/core';
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
              private _sanitizer: DomSanitizer) {
    this._teljesPost = _erettsegiService.getErettsegiById(2);
    this.videoUrl =  this._sanitizer.bypassSecurityTrustResourceUrl(this._teljesPost.video);
    //this.videoUrl = "https://www.youtube.com/embed/videoseries?list="+this._teljesPost.video;
    //console.log(this._teljesPost);
    //console.log(this.videoUrl);
  }

  ngOnInit() {
  }

}
