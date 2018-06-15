<template>
<a :href="mailtoLink">general@streik2018.ch</a>
</template>
<script>

export default {  
  name: 'Kontakt',
  props: ['text'],
  computed:{
      mailtoLink: function(){
          return 'mailto:general@streik2018.ch';
      }
  }
}
</script>