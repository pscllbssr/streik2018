<template>
<div class="thema">
  <Video :id=videoId :title=title :index=index />
  <p>{{ text }}</p>
</div>
</template>
<script>
export default {  
  name: 'Thema',
  props: ['title', 'text', 'videoId', 'index']
}
</script>
<style>
</style>
