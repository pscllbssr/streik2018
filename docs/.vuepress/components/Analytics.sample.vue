<template>
    
</template>

<script>
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

export default {  
  name: 'Analytics',
  components: {
      Vue, VueAnalytics
    },
    mounted(){
        Vue.use(VueAnalytics, {
            id: 'XX-XXXXXXX-X',
            checkDuplicatedScript: true,
            set: [
                { field: 'anonymizeIp', value: true }
            ]
})
    }
}

</script>