(function(){
  // https://github.com/spencermountain/nlp_compromise/issues/62
  // 'use strict';

  angular.module('nlpCompromise', []).factory('nlp', factory);

  function factory() {
    //= include nlp.js
    return nlp;
  }

})();
