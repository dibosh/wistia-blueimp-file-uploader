import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wistia-video-uploader',
  templateUrl: './wistia-video-uploader.component.html',
  styleUrls: ['./wistia-video-uploader.component.scss']
})
export class WistiaVideoUploaderComponent implements OnInit {
  uploadedVideoUrl: string;
  isVideoUploaded: boolean;

  constructor() {}

  ngOnInit() {
    this.isVideoUploaded = false;
    this.uploadedVideoUrl = '//fast.wistia.net/embed/iframe/djyx0apfhv?videoFoam=true';
  }

}
