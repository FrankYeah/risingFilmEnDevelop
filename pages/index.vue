<template>
  <div class="index">
    <div class="index-head">RISING FILMS</div>
    <div class="index-sub">Imagination on the Rise.</div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'RISING FILMS',
    meta: [
      { name: 'keywords', content: 'RISING FILMS'},
    ]
  },
  layout: 'default',
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

.index {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  &-head {
    font-size: 64px;
  }

  &-sub {
    margin-top: 20px;
    font-size: 24px;
    opacity: 0.75;
  }
  
}


</style>