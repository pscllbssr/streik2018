<template>
<div class="parallax-video">

<video :id="videosrc" class="scroll" width="100vw" height="auto" tabindex="0" autobuffer="autobuffer" preload="auto">
    
    <source :src="require('../assets/video/' + videosrc + '_1080p.webm')" type="video/webm" v-if="deviceWidth > 1600"></source> 
				<source :src="require('../assets/video/' + videosrc + '_720p_23fps.webm')" type="video/webm" v-if="deviceWidth > 1200"></source> 
                <source :src="require('../assets/video/' + videosrc + '_720p_23fps.webm')" type="video/webm" v-if="deviceWidth > 768"></source> 
                <source :src="require('../assets/video/' + videosrc + '_405p.webm')" type="video/webm" v-if="deviceWidth <= 768"></source> 
                <source :src="require('../assets/video/' + videosrc + '_405p.webm')" type="video/webm" v-if="deviceWidth == 0"></source> 
                
                <source :src="require('../assets/video/' + videosrc + '_1080p_25fps.mp4')" type="video/mp4" v-if="deviceWidth > 1600"></source>                              
				<source :src="require('../assets/video/' + videosrc + '_720p_23fps_2.5bit.mp4')" type="video/mp4" v-if="deviceWidth <= 768"></source> 
				<source :src="require('../assets/video/' + videosrc + '_720p_23fps_2.5bit.mp4')" type="video/mp4" v-if="deviceWidth > 768"></source>
				<source :src="require('../assets/video/' + videosrc + '_720p_23fps_2.5bit.mp4')" type="video/mp4" v-if="deviceWidth > 1200"></source>
                <source :src="require('../assets/video/' + videosrc + '_720p_23fps_2.5bit.mp4')" type="video/mp4" v-if="deviceWidth == 0"></source> 


                <!--
                <source :src="require('../assets/video/' + videosrc + '_1080p_25fps.mp4')" type="video/mp4" media="screen and (min-device-width:1600px)"></source>                                
                <source :src="require('../assets/video/' + videosrc + '_720p_23fps.webm')" type="video/webm" media="screen and (min-device-width:1200px)"></source> 
				<source :src="require('../assets/video/' + videosrc + '_720p_23fps_2.5bit.mp4')" type="video/mp4" media="screen and (min-device-width:1200px)"></source>
                <source :src="require('../assets/video/' + videosrc + '_720p_23fps.webm')" type="video/webm" media="screen and (min-device-width:769px)"></source> 
				<source :src="require('../assets/video/' + videosrc + '_720p_23fps_2.5bit.mp4')" type="video/mp4" media="screen and (min-device-width:769px)"></source>
                <source :src="require('../assets/video/' + videosrc + '_405p.webm')" type="video/webm" media="screen and (max-device-width:768px)"></source> 
				<source :src="require('../assets/video/' + videosrc + '_720p_23fps_2.5bit.mp4')" type="video/mp4" media="screen and (max-device-width:768px)"></source>       
                -->
                <ParallaxImage img="generalstreik-1918-demonstration.jpg" />          
</video>

</div>

</template>
<script>
//import Parallax from 'vue-parallaxy'
import VueMixinTween from 'vue-mixin-tween';

export default {  
  name: 'ParallaxVideo',
  props: ['videosrc'],
  data() {
    return {
        videoEl: {},
        frameNumber: 0,
        deviceWidth: null
    }
},

    mixins: [
        VueMixinTween('frameNumber', 2000),
    ],
  components: {
      //Parallax
    },
    methods: {
        scrubVideo(){
            //vidoffset = videoEl.offsetTop;
    let videoOffset = this.videoEl.offsetTop;
    let pageYOffset = Math.floor(window.pageYOffset);
    let videoHeight = this.videoEl.clientHeight;

    let start = videoOffset - videoHeight;
    let stop = videoOffset + videoHeight;


    if(pageYOffset > start && pageYOffset < stop){     
        
        let totalSpace = stop - start;
        let currentPosition = stop - pageYOffset;
        let totalFrameNumber = 16;

        let reversedFrameNumber = parseFloat(totalFrameNumber / totalSpace * currentPosition);

        this.frameNumber = totalFrameNumber - reversedFrameNumber;
        
        this.videoEl.currentTime = Math.floor(this.frameNumber);
    }

    },
        handleScroll (event) {
            this.scrubVideo();
    }
    },
    mounted(){
    // is this really equivalent to DOMcontentloaded?
    this.videoEl = document.getElementById('' + this.videosrc);
    this.videoEl.pause();   
    this.deviceWidth = window.innerWidth;         
    },

    created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>
<style scoped>

.parallax-video{
    margin: 5vw 0;

    display: block;

	/*width:100vw;*/
	overflow: hidden;
}

video{
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
}

</style>
