# LiveVox Front-End Exercise - Alejandro Onatra 

## Files

```
livevox-portal
|   INSTRUCTIONS.md
│   README.md
│   gulpfile.js
|   bower.json
|   package.json 
│
└───src
|    │   index.html
|    │
|    ├───stylesheets
|    │   │   styles.min.css
|    │   │   styles.scss
|    |   ├───base
|    |   │      _common.scss
|    |   │  
|    |   ├───components
|    |   │      _colors.scss
|    |   │      _typography.scss
|    |   │   
|    |   ├───layout
|    |   │      _carouselb.scss
|    |   │      _navbar.scss
|    │   
|    │
|    ├───javascripts
|    │   │   livevox.js
|    │   │   livevox.min.js
|    │   │  
|    |   ├───layout
|    |       │   layout.module.js
|    |       │   
|    |       ├───controllers
|    |       │      index.controllers.js
|    |       │   
|    |       ├───services
|    |       │      navbar.service.js
|    │   
|    │   
|    └───img
|           //images
└───dist
    │   index.html
    │
    ├───css
    │    styles.min.css
    │   
    └───js
    │   livevox.min.js
    │   
    ├───img
        //images



```

## Enviroment

The following technologies where used for the project

* AngularJS [Logic-Controller-View]
* Twitter Bootstrap [View]
* Gulp [Automation]
* Bower [Building]
* NodeJS [Javascript backend]

## Building

One can use the already ready dist/ files or build them from the src/, bear in mind the the process assumes that the 
file structure is the same as the one presented and that you already have installed locally the node and npm packages:

In order to build the project you must follow the next process:

* Install the node dependencies `npm install`

* Install the bower dependencies `npm install`

* Build the project: `gulp`

## API

* GET https://demo1045116.mockable.io/menu - returns a JSON response representing the items in the nav.

## Version
0.1.0

## Achievements

* The banner to rotate images every 5 seconds automatically 
* Grid system 
* Sass files 

## Modifications or excludes

##### Typography

+ +Headline (Mobile) 30px Montserrat Bold
+ +Body Copy (Mobile) 20px Open Sans Light

##### Desktop

- -On click, Secondary shows an alert with the section Name.

##### Mobile

- -When a user clicks the open navigation icon (“hamburger”), the navigation should “push” from left to right.
* When the navigation closes:
  - -The menu should “pull” from right to left
  - -The logo with full colors shows up