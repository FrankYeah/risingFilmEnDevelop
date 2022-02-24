<template>
  <div class="title">
    <div class="title-text">{{ title }}</div>
    <div class="title-line"></div>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {
    title: {
      type: String
    },
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

.title {

  &-text {

  }

  &-line {
    width: 32px;
    height: 0.5px;
    margin-top: 5px;
    background-color: white;
  }
  
}

@media( max-width: 1023px ){

.title {

  &-text {

  }

  &-line {
    margin-top: 4px;
  }
  
}

}


</style>