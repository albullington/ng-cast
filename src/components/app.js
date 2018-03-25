angular.module('video-player')

.component('app', {
  
  controller: function(youTube) {
    this.video = exampleVideoData[0];
    this.videos = exampleVideoData;
    // console.log('original video', this.video);
    // this.currentVideo = exampleVideoData[0];

    this.selectVideo = (video) => {
      this.video = video;
      console.log('clicked');
    };
    
    this.searchResults = (data) => {
      this.videos = data;
      this.video = this.videos[0];
    };
    
    youTube.search(this.input, this.searchResults);
  },
  
  templateUrl: "src/templates/app.html"
 });
