(function(){
  'use strict';

  angular.module('app', ['nlpCompromise']).controller('AppController', controller);

  controller.$inject = ['$scope', 'nlp'];

  function controller($scope, nlp) {
    var vm = this;

    vm.text = "Every inch of wall space is covered by a bookcase. Each bookcase has six shelves, going almost to the ceiling. Some bookshelves are stacked to the brim with hardback books: science, maths, history, and everything else. Other shelves have two layers of paperback science fiction, with the back layer of books propped up on old tissue boxes or lengths of wood, so that you can see the back layer of books above the books in front. And it still isn't enough. Books are overflowing onto the tables and the sofas and making little heaps under the windows.";

    vm.nouns = null;
    vm.adjectives = null;
    vm.adverbs = null;
    vm.verbs = null;
    vm.values = null;

    $scope.$watch('vm.text', function(text) {
      if (!text) {
        vm.nouns = null;
        vm.adjectives = null;
        vm.adverbs = null;
        vm.verbs = null;
        vm.values = null;
        return;
      }

      var pos = nlp.pos(text)

      vm.nouns = pos.nouns().map(function(ele) {
        return ele.normalised;
      });
      vm.nouns = _.uniq(vm.nouns);
      vm.nouns = vm.nouns.join(', ');

      vm.adjectives = pos.adjectives().map(function(ele) {
        return ele.normalised;
      });
      vm.adjectives = _.uniq(vm.adjectives);
      vm.adjectives = vm.adjectives.join(', ');

      vm.adverbs = pos.adverbs().map(function(ele) {
        return ele.normalised;
      });
      vm.adverbs = _.uniq(vm.adverbs);
      vm.adverbs = vm.adverbs.join(', ');

      vm.verbs = pos.verbs().map(function(ele) {
        return ele.normalised;
      });
      vm.verbs = _.uniq(vm.verbs);
      vm.verbs = vm.verbs.join(', ');

      vm.values = pos.values().map(function(ele) {
        return ele.normalised;
      });
      vm.values = _.uniq(vm.values);
      vm.values = vm.values.join(', ');
    });
  }

})();
