import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WistiaVideoUploaderComponent } from './wistia-video-uploader.component';

describe('WistiaVideoUploaderComponent', () => {
  let component: WistiaVideoUploaderComponent;
  let fixture: ComponentFixture<WistiaVideoUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WistiaVideoUploaderComponent ]
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
});
