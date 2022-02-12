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
    height: 1.5px;
    margin-top: 5px;
    background-color: white;
  }
  
}


</style>