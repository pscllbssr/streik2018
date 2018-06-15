<template>
<p><!--<span class="audio-icon"></span>--><span class="info-icon">i</span>{{ text }}</p>
</template>
<script>

export default {  
  name: 'Info',
  props: ['text']
}
</script>
<style scoped>
p{
    color: gray;
}

span.info-icon{
    display: inline-block;
    border: 2px solid black;
    border-radius: 20px;
    width: 20px;
    line-height: 20px;
    vertical-align: middle;
    text-align: center;
        box-sizing: content-box;
        margin-right: 10px;
}
/*
span{
     display: inline-block;
    vertical-align: middle;
    position: relative;
    font-style: normal;
    color: #ddd;
    text-align: left;
    text-indent: -9999px;
    direction: ltr;
    box-sizing: border-box;
}
span:after, span:before {
    content: '';
    pointer-events: none;
}
span.audio-icon{
        margin: 4px 18px 4px 3px;

            width: 0;
    height: 0;
    border: 7px solid;
    border-left: none;
    border-top-color: transparent;
    border-bottom-color: transparent;
    padding: 6px 3px;
    box-shadow: inset 4px 0;

}

span.audio-icon::before{
    border-style: double;
    border-width: 6px;
    left: -2px;
        width: 15px;
    height: 15px;
    position: absolute;
    border-radius: 50%;
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
            top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
        border: 2px solid;
}
span.audio-icon::after{
    width: 32px;
    height: 32px;
    left: -7px;

    position: absolute;
    border-radius: 50%;
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
        position: absolute;
    border-radius: 50%;
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    border: 2px solid;
}*/
</style>
