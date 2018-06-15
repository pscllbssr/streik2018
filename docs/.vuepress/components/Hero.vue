<template>
<div class="hero">
    <div :style="{ backgroundImage: 'url(' + require('../assets/img/100-jahre-generalstreik.jpg') + ')' }">        
        <h2 class="site-subtitle"><i>{{ subtitle }}</i></h2>
        <h1 class="site-title"><i>{{ title }}</i></h1>
        <!--<img :src='require("../assets/img/100-jahre-generalstreik.jpg")' />-->

    </div>
</div>
</template>
<script>
export default {  
  name: 'Thema',
  props: ['title', 'subtitle', 'img'],
}
</script>
<style>

.hero>div{
    height: 100vh;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

h1.site-title, 
h2.site-subtitle{
    /*text-shadow: #404847 3px 3px 4px;*/
    width: auto;
    background-color: white;    
    opacity: .9;
}



h1.site-title{
    font-size: 3em;
    padding: 20px;
    line-height: 80%;
    margin: 1vh 20px;
}

h2.site-subtitle{
    padding: 10px;
    margin: 0;    
    margin: 1vh 0;    
}
@media screen and (min-width: 992px) {
  .hero>div{
      height: 100vh;
  }
}
     
</style>
