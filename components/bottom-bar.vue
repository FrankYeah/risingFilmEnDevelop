<template>
  <div class="bottom">
    <div class="bottom-social">
      <img v-lazy="require('@/assets/img/icon/fb.png')" alt="fb">
      <img v-lazy="require('@/assets/img/icon/ig.png')" alt="ig">
      <img v-lazy="require('@/assets/img/icon/mail.png')" alt="mail">
    </div>
    <div class="bottom-copyright">© 2021, RISING FILMS ALL RIGHTS RESERVED</div>
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
    '$route.name': {
      handler: function(route) {
        // this.isShowTopSide = route == 'login' ?  false : true
      },
      immediate: true
    },
  }
}
</script>

<style lang="scss">

.bottom {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 32px;

  &-social {

    & img {
      width: 20px;
      height: 100%;
      margin-right: 18px;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  &-copyright {
    font-size: 14px;
    opacity: 0.7;
  }
}

@media( max-width: 1023px ){

.bottom {
  padding: 0px 16px;

  &-social {

    & img {
      
    }
      
  }

  &-copyright {
    width: 164px;
    line-height: 1.2;
    text-align: right;
  }
}

}


</style>