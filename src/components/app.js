angular.module('video-player')

.component('app', {
  
  controller: function() {
    this.video = exampleVideoData[0];
    this.videos = exampleVideoData;
    console.log('original video', this.video);
    // this.currentVideo = exampleVideoData[0];

    this.selectVideo = function(video) {
      this.video = video;
      console.log('video', this.video);
      console.log('clicked');
      
    };
    this.searchResults = function() {
      
    };
  },
  
  templateUrl: "src/templates/app.html"
 });
