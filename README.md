# angular-nlp-compromise
Natural Language Processing in your angularjs application. Based on [nlp_compromise](https://github.com/spencermountain/nlp_compromise) library.

## Example:
[small angular example here](http://rawgit.com/kroid/angular-nlp-compromise/master/example/index.html)

nlp_compromise examples:

* [Long Text Demo](http://rawgit.com/spencermountain/nlp_compromise/master/client_side/long_demo/index.html)
* [Specific Methods](http://rawgit.com/spencermountain/nlp_compromise/master/client_side/basic_demo/index.html)
* [Realtime Demo](http://rawgit.com/spencermountain/nlp_compromise/master/client_side/cute_demo/index.html)

[![Video](http://i.vimeocdn.com/video/493948602_640.jpg)](https://vimeo.com/109880250)

## Getting started:
### Get the code:
Install via **[Bower](http://bower.io/)** `$ bower install --save angular-nlp-compromise`.

Or [download the release](http://rawgit.com/kroid/angular-nlp-compromise/master/dist/angular-nlp-compromise.js) ([minified](http://rawgit.com/kroid/angular-nlp-compromise/master/dist/angular-nlp-compromise.min.js))

### Add module to your application.
#### index.html:
```html
<html ng-app="app">
  <head></head>
  <body ng-controller="AppController">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.13/angular.min.js"></script>
    <script src="angular-nlp-compromise.min.js"></script>
    <script src="app.js"></script>
  </body>
</html>
```
#### app.js
```javascript
(function() {
  angular
    .module('app', ['nlpCompromise'])
    .controller('AppController', controller);

  controller.$inject = ['nlp']

  function controller(nlp) {
    console.log(nlp);
  }
})();
```
### Documentation
See docs in [nlp_compromise](https://github.com/spencermountain/nlp_compromise) repository.
