angular.module('video-player')

.component('search', {
  bindings: {
    service: '<',
    result: '<'
  },
  
  controller: function() {
    this.result = function(){}
  },
  templateUrl: "src/templates/search.html"
});
