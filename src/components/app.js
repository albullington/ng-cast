angular.module('video-player')

.component('app', {
  
  controller: function() {
    this.video = exampleVideoData[0];
    this.videos = exampleVideoData;

    this.selectVideo = function() {
      
    };
    this.searchResults = function() {
      
    };
  },
  
  templateUrl: "/src/templates/app.html"
 });
