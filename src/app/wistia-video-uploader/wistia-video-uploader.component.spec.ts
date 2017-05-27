import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedUrlPipe } from './../trusted-url.pipe';
import { WistiaVideoUploaderComponent } from './wistia-video-uploader.component';

describe('WistiaVideoUploaderComponent', () => {
  let component: WistiaVideoUploaderComponent;
  let fixture: ComponentFixture<WistiaVideoUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WistiaVideoUploaderComponent, TrustedUrlPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WistiaVideoUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have the upload button', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('upload-button')).toBeDefined();
  });

  it('should not show the progress bar initially', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('progress')).toBeNull();
  });
});
