<template>
<div class="mobile-toggler">
  <button @click="toggle">
      <span v-if="active">close</span>
      <span v-else>open</span>
  </button>
</div>
</template>
<script>

export default {  
  name: 'NavigationToggler',
  data(){
            return{
                active:false,
            }
        },
  props: [],
  methods: {
      toggle() {
        this.active = !this.active;
      }
  }
}
</script>
<style scoped>
.mobile-toggler{
    position: absolute;
    top: 0;
    width: auto; 
}
</style>
