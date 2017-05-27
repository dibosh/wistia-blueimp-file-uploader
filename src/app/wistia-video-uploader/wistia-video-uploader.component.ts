import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-wistia-video-uploader',
  templateUrl: './wistia-video-uploader.component.html',
  styleUrls: ['./wistia-video-uploader.component.scss']
})
export class WistiaVideoUploaderComponent implements AfterViewInit {
  @ViewChild('wistiavuploader') element:ElementRef;
  uploadedVideoUrl: string;
  isVideoUploaded: boolean;
  isUploadingVideo: boolean;
  videoUploadProgress: number;
  apiSecret: string;

  constructor() {
    this.isVideoUploaded = false;
    this.apiSecret = '3b2f5f1795b5026114d535eff37b8eef7d5d9fdef6966ee1ae7ec702846d0b14';
    this.isUploadingVideo = false;
    this.videoUploadProgress = 0;
  }

  ngAfterViewInit() {
    let self = this;
    function _onUploadCallback(e, data) {
      data.formData = {
        api_password: self.apiSecret
      };
      self.isUploadingVideo = true;
      data.submit();
    }

    function _onProgressCallback(e, data) {
      self.videoUploadProgress = data.loaded / data.total * 100;
    }

    function _onCompleteCallback(e, data) {
      self.isUploadingVideo = false;
      self.isVideoUploaded = true;
      self.uploadedVideoUrl = self.getUploadedVideoUrl(data.result.hashed_id);
    }

    $(this.element.nativeElement)
      .find('#file-upload')
      .fileupload({
        url: 'https://upload.wistia.com',
        add: _onUploadCallback,
        progressall: _onProgressCallback,
        done: _onCompleteCallback
      });
  }

  getUploadProgress() {
    this.videoUploadProgress = this.videoUploadProgress > 100 ? 100 : this.videoUploadProgress;
    return this.videoUploadProgress;
  }

  getUploadedVideoUrl(videoHash) {
    return '//fast.wistia.net/embed/iframe/' + videoHash + '?videoFoam=true';
  }
}
