<template>
  <div class="virtual">
    <boxWidth>
      <headTop>
        <generalTitle :title="'Virtual Production'"></generalTitle>
      </headTop>
    </boxWidth>
    <div class="virtual-head">COMING SOON</div>
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
    boxWidth: require('~/components/general-boxwidth.vue').default,
    headTop: require('~/components/general-headtop.vue').default,
    generalTitle: require('~/components/general-title.vue').default
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

.virtual {

  &-head {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 64px;
    font-weight: 900;
    text-shadow: 0 0 2px white;
    letter-spacing: 4px;
    color: #171719;
    -webkit-text-stroke: 1px white;
  }
  
}

@media( max-width: 1023px ){

.virtual {

  &-head {
    width: 212px;
    font-size: 48px;
    text-align: left;
  }
  
}

}


</style>