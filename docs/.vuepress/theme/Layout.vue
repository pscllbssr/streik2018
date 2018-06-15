<template>
    <Content />    
</template>
<script>
//ga('set', 'anonymizeIp', true);
export default {
  mounted(){    
    // is this really necessary?
    // https://github.com/whoan/vuepress-canvas/blob/master/theme/Layout.vue
    this.currentMetaTags = []
    const updateMeta = () => {
      document.title = this.$title
      document.documentElement.lang = this.$lang
      const meta = [
        {
          name: 'description',
          content: this.$description
        },
        ...(this.$page.frontmatter.meta || [])
      ]
      this.currentMetaTags = updateMetaTags(meta, this.currentMetaTags)
    }
    this.$watch('$page', updateMeta);
    updateMeta();
  },

 created () {
    if (this.$ssrContext) {
      this.$ssrContext.title = this.$title
      this.$ssrContext.lang = this.$lang
      this.$ssrContext.description = this.$page.description || this.$description
    }
  }
}

function updateMetaTags (meta, current) {
  if (current) {
    current.forEach(c => {
      document.head.removeChild(c)
    })
  }
  if (meta) {
    return meta.map(m => {
      const tag = document.createElement('meta')
      Object.keys(m).forEach(key => {
        tag.setAttribute(key, m[key])
      })
      document.head.appendChild(tag)
      return tag
    })
  }
}
</script>

<style>

nav{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    bottom: 0;
    background: white;
    opacity: 0;
    visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}
nav.open{  
  opacity: .9;
  visibility: visible;
}

div.fixed-nav{
  position: absolute;
  top: 0;
  left: 0;
  padding-left: 2vw;
}

section,footer,div.container{
   /* min-height: 100vh;*/
  width: 95%;
  margin: 0 auto;
}
div.container{
   max-width: 540px; 
}
.inner-container{
  width:80vw;
}
footer{
    text-align: left;
    border-top: 1px solid #496034;
    margin-top: 80px;
    font-size: 1em;
    color: #4E5251;
    text-align: center;
}


h1{
  width: 100%;
  text-align: center;
  margin: 1.67em 0 0.67em;
  font-size: 2.5em;
}

h2{
  margin: .5em 0;
}

h3{
  font-size: 1.2em;
  margin: 0;
}

@media screen and (min-width: 768px) {
  footer{
    text-align: center;
  }
}
@media screen and (min-width: 992px) {
  section, footer{
    width: 800px;
  }
  .inner-container{
    width: 650px;
  }
  h1{
  font-size: 3.5em;
}
}
@media screen and (min-width: 1200px) {
  section, footer{
    width: 1140px;
  }
  
  .inner-container{
    width: 1000px;
  }
}

@media screen and (min-width: 1600px) {
  section, footer{
    width: 1500px;
  }
  
  .inner-container{
    width: 1400px;
  }
}

header{    
    display: flex;
    flex-direction: column;
}
@media screen and (min-width: 992px) {
  header{
      flex-direction: row;          margin-bottom: -5vw;
  }
}

header > div{
  flex: 1;
}

.lead{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2em 0;
}

.lead p{
    max-width: 540px;
    margin: 20px 5vw;
}

.narrow{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
        margin-top: -50px;
}
.narrow p,
.narrow div{
      max-width: 540px;
      
}



/** 
    overall properties 
*/

*{
    box-sizing: border-box;
}

 @import url("https://use.typekit.net/xzd1frb.css");

body{
  font-family: "mr-eaves-modern", roboto, sans-serif;
  font-size: 1.2em;
    line-height: 150%;
}

h1, h2, h3{
    font-family: "mr-eaves-modern", roboto, sans-serif;
    font-weight: 800;
    word-wrap: break-word;
    line-height: 100%;
    color: #4E5251;
}

h1{
  text-transform: uppercase;
  
}

html{
  background-color: #fafafc;
}

a{
  color: #6C7F83;
  transition: 300ms;
}
a:hover{
  color: #4E5251;
}
section p,
.text{
    max-width: 540px;
    margin: 1em auto 3em;
}

section img, div.container img{
  max-width: 100%;

}

</style>
