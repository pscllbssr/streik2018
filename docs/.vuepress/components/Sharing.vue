<template>
<div class="social-sharing">
<vue-goodshare-twitter 
   button_design="outline"
   :page_url="url" 
   has_icon
  ></vue-goodshare-twitter>

   <vue-goodshare-facebook 
   button_design="outline"
   :page_url="url"
   has_icon 
   ></vue-goodshare-facebook>

   <vue-goodshare-whats-app
   :page_url="url" 
   button_design="outline"
   has_icon
   ></vue-goodshare-whats-app> 
</div>
</template>
<script>
import VueGoodshareFacebook from 'vue-goodshare/src/providers/Facebook.vue'
import VueGoodshareTwitter from 'vue-goodshare/src/providers/Twitter.vue'
import VueGoodshareWhatsApp from 'vue-goodshare/src/providers/WhatsApp.vue'

export default {  
  name: 'Sharing',
  props: [],
  data() {
    return {
      url: 'https://streik2018.ch'
    }
  },
  components: {
    'vue-goodshare-facebook':VueGoodshareFacebook, 
      'vue-goodshare-twitter': VueGoodshareTwitter, 
      'vue-goodshare-whats-app': VueGoodshareWhatsApp
      }
}
</script>
<style>

.social-sharing a{
  filter: grayscale(1);
  transition: filter 300ms;
}
.social-sharing a:hover{
  filter: grayscale(0);
}

</style>
