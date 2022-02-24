<template>
  <div class="virtual">
    <boxWidth>
      <headTop>
        <generalTitle :title="'Virtual Production'"></generalTitle>
      </headTop>
    </boxWidth>
    <div class="virtual-box">
      <div class="virtual-line"></div>
      <div class="virtual-head">COMING SOON</div>
    </div>
    
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

  &-box {
    position: fixed;
    top: 0px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100vh;
  }

  &-line {
    width: calc(50vw - 287px);
    margin-right: 46px;
    height: 1px;
    background-color: #818181;
  }

  &-head {
    text-align: center;
    font-size: 64px;
    font-weight: 900;
    letter-spacing: 4px;
    color: white;
  }
  
}

@media( max-width: 1023px ){

.virtual {

  &-box {
    
  }

  &-line {
    
  }

  &-head {
  }
  
}

}

@media( max-width: 550px ){

  .virtual {

    &-box {
      
    }

    &-line {
      width: calc(50vw - 117px);
      margin-right: 11px;
    }

    &-head {
      width: 212px;
      font-size: 48px;
      text-align: left;
    }
  }
}


</style>