import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { TrustedUrlPipe } from './trusted-url.pipe';
import { WistiaVideoUploaderComponent } from './wistia-video-uploader/wistia-video-uploader.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TrustedUrlPipe,
        WistiaVideoUploaderComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render header', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('Wistia Blueimp Video Uploader Demo');
  }));
});
