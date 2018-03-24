angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    data: '<'
  },
  
  templateUrl: "/src/templates/videoPlayer.html"

});
