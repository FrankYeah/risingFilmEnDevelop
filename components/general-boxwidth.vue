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
  padding: 0px 27px;
}

@media( max-width: 1023px ){

.boxwidth {
  
}

}


</style>