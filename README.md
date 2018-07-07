# AngularBasics

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically 
reload if you change any of the source files.

## Code Scaffolding

### Angular

Run `ng generate component <component-name>` to generate a new component. You can also use 
`ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Material UI

* Run `npm install @angular/material @angular/cdk @angular/animations` to install the Angular Material UI library 
and its associated Content Development Kit
* Add a `material.module.ts` module to the `src` directory for all Material module imports.  See `material.module.ts`
in this project for an example.
* Export the NgModule defined in `material.module.ts` and import it in `app.module.ts`
* Add the BrowserAnimationsModel to `app.module.ts`
* In the `index.html` file add links to the Roboto font and the Material Icons libraries.
See the `index.html` file in this project for an example.
* A theme is required to use the Material UI library.  There are several pre-built themes.
An example of how to include one of these in an application can be found in `style.scss`
file in this project.

### Global Stylesheets

SCSS provides the ability to declare variables that can be imported into other stylesheets.
This concept can be used to define styles that are used throughout the application, keeping things DRY.
A variation of the 7-1 (seven folders, one file) pattern is used in this project to organize reusable styles.
The 7-1 pattern is defined in the style guide located here: https://sass-guidelin.es/#architecture.  It is 
implemented within this project in the `src/stylesheets` directory.  The variations are:
* The 7-1 pattern uses a directory named `sass` to house all the stylesheets.  I am opposed to 
naming directories after a technology as the underlying technology can change.  Thus, the directory
is named `stylesheets` within this project.
* One of the seven folders in the pattern is `pages`.  This folder is omitted from this project 
because it is a single-page application that uses components.  A `pages` directory clashes with 
that paradigm, IMO.
* The `components` directory in the 7-1 pattern is renamed to `controls` in this project
to eliminate confusion between an UI component and an Angular components.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. 
Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the 
[Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
