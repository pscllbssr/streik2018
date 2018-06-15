<template>
<div class="parallax-img" :style="{ backgroundImage: 'url(' + require('../assets/img/generalstreik-1918-demonstration.jpg') + ')'}">     
     <!--<parallax :parallax="true" :speedFactor=".5">
        <img :src="require('../assets/img/generalstreik-1918-demonstration.jpg')" alt="very cool bg">
    </parallax>   -->
    <div >
            <!--<img :src="require('../assets/img/generalstreik-1918-demonstration.jpg')" alt="">-->
    </div>
</div>


</template>
<script>
import Parallax from 'vue-parallaxy'

export default {  
  name: 'ParallaxImage',
  props: ['img'],
  components: {
      Parallax
    }
}
</script>
<style>

.parallax-img{
    /*margin: 5vw 0;*/
}

/*
.parallax-img > div{
    background-size: cover;
}     
.parallax-img img{
    width: 100%;
    opacity:0;
    display: block;
}*/

.parallax-img{
    height: 56.25vw;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
