import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WistiaVideoUploaderComponent } from './wistia-video-uploader/wistia-video-uploader.component';
import { TrustedUrlPipe } from './trusted-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WistiaVideoUploaderComponent,
    TrustedUrlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
