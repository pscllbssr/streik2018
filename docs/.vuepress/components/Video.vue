<template>
<div class="video-container">
  <img :src="'//img.youtube.com/vi/' + id + '/' + previewSizePrefix + '.jpg'" @click="playVideo()" />
  <svg class="video-play-button" viewBox="0 0 200 200" alt="Play video" @click="playVideo()" v-if="!played">                    
    <rect y="25" rx="20" ry="20" width="200" height="150" fill="#4E5251"></rect>                    
    <polygon points="70, 55 70, 145 145, 100" fill="#fff"></polygon>                
    </svg>
    <div class="lightbox" v-if="played">
      <div class="inner-container">  
                 
        <h2 class="video-title">{{ title }} <!--{{ index }}--></h2>
        <div class="lightbox-container">  
  
        <iframe width="560" height="315" :src="value" allowfullscreen frameborder="0" v-if="played" allow="autoplay"></iframe>
        </div></div>
        <button class="lightbox-close" @click="stopVideo()" title="Video schliessen"></button>
    </div>
  
  </div>
</template>
<script>
export default {
  name: 'Video',
  props: ['id', 'title', 'index'],

  // We have to copy the value because we can't use v-model with
  // nothing to bind to.
  // (VuePress doesn't have support for reactive page variables at the moment.)
  // inspired by https://github.com/Daugilas/lazyYT
  data() {
    return {
      value: 'https://www.youtube.com/embed/' + this.id + '?autoplay=1&color=white&modestbranding=1&rel=0&showinfo=0',
      played: false,
      previewSizePrefix: 'mqdefault', 

      videoStyleObject: {},
      posterStyleObject: {display: 'block'}
    }
  },
  methods: {
    playVideo(){      
      this.played = true;
    },
    stopVideo(){
      this.played = false;
    }
  }
}
</script>
<style>
 h2.video-title{
   display: none;
 }
  .video-container, .lightbox-container 
  { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;
  } 

  .lightbox .video-container{
    background: #000000;
    box-shadow: #4e5251 2px 2px 20px 0px;
  }
  .video-container iframe, 
  .video-container object, 
  .video-container embed, 
  .video-container img 
  { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
  .video-container img{
    z-index: 99;
    cursor: pointer;
    transition: all 150ms;
  }
  .video-container img:hover{
    
    filter: opacity(.7);
  }
  .video-play-button{
    z-index: 100;
    box-sizing: border-box;
    width: 5vh;
    height: 5vh;
    position: absolute;
    bottom: 3%;
    left: 5%;
    display: block;
    opacity: 0.95;
    cursor: pointer;
    filter: opacity(.8);
    transition: all 150ms;
  }
  .video-play-button:hover{
    
    filter: opacity(1);
  }

    .lightbox{
      z-index: 101;
      position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    }
  @media screen and (max-width: 767px){
  .lightbox .inner-container{
    width: 100%;
    }}

  @media screen and (min-width: 768px){

    h2.video-title{
      display: block;
  text-align: left;
  font-size: 2em;
    margin-bottom: .5em;
    color: #4e5251;
  /*
  text-align: left;
    position: absolute;
    bottom: 100%;
        
        */
}
    

  .lightbox{
    position: fixed;
    background-color: rgba(255, 255, 255, 0.9);

    display: flex;
    align-items: center;
    justify-content: center;
    
        flex-direction: column;
  }
  .lightbox .inner-container{
    
    position: relative;
  }
  .lightbox-container{
  
  }
  .lightbox-close{
    position: fixed;
    right: 3vh;
    top: 3vh;

    display: inline-block;
    width: 50px;
    height: 50px;
    overflow: hidden;

    background: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;
    transition: 300ms; 
  }
  .lightbox-close::before{
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .lightbox-close::after{
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }


  .lightbox-close:hover::before{
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  .lightbox-close:hover::after{
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

    .lightbox-close::after,
    .lightbox-close::before{
      transition: 300ms;
        height: 8px;
    margin-top: -4px;

      content: '';
      position: absolute;
      width: 100%;
      top: 50%;
      left: 0;
      transition: 300ms;
      
        background: #4E5251;
    }

    .lightbox-close:hover::after,
    .lightbox-close:hover::before{
      
      background: #6C7F83;
    }
  }
</style>