<template>
<a href="#die-umstande"></a>
</template>
<script>

export default {  
  name: 'ScrollDown',
  props: []
}
</script>
<style scoped>

a{    
    position: absolute;
    top: 85vh;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 5px solid white;
    border-bottom: 5px solid white;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: sdb04 2s infinite;
    animation: sdb04 2s infinite;
    box-sizing: border-box;
}

@media screen and (min-width: 992px) {
  a{
    border-left: 2px solid #4E5251;
    border-bottom: 2px solid #4E5251;
    left: 75%;
  }
}

@-webkit-keyframes sdb04 {
  0% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
  }
  20% {
    -webkit-transform: rotate(-45deg) translate(-10px, 10px);
  }
  40% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
  }
}
@keyframes sdb04 {
  0% {
    transform: rotate(-45deg) translate(0, 0);
  }
  20% {
    transform: rotate(-45deg) translate(-10px, 10px);
  }
  40% {
    transform: rotate(-45deg) translate(0, 0);
  }
}
</style>
