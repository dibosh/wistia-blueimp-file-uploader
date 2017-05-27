# Wistia Blueimp File Uploader

A simple `angular 2` component that wraps the [blueimp jquery plugin](https://github.com/blueimp/jQuery-File-Upload) and
gives the ability to upload into `wistia` using their upload [api](https://wistia.com/doc/upload-api).

*This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.4.*

## Usage of the Component
`src > app > app.component.html` shows the simple enough usage of the component. The only configurable input for the
component is the `apiSecret`(i.e. `api_password` as defined in [wistia api](https://wistia.com/doc/upload-api)). 
The component should look like this when passed with an `apiSecret`-
```
<app-wistia-video-uploader [apiSecret]="yourAPIPasswordFromWistia"></app-wistia-video-uploader>
```

## Development server

Run `ng serve --open` for a dev server to open in browser at- `http://localhost:4200/`. The app will automatically 
reload if you change if any changes are made to the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Using the `-prod` 
flag will trigger a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
