(function(){
  'use strict';

  angular.module('nlpCompromise', []).factory('nlp', factory);

  function factory() {
    //= include nlp.js
    return nlp;
  }

})();
