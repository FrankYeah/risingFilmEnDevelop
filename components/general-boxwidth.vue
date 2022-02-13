<template>
  <div class="boxwidth">
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {
    
  },
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {
    
  },
  watch: {
    
  }
}
</script>

<style lang="scss" scoped>

.boxwidth {
  max-width: 1000px;
  margin: auto;
}

@media( max-width: 1023px ){

.boxwidth {
  
}

}


</style>