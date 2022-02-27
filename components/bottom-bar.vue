<template>
  <div class="bottom">
    <div class="bottom-social">
      <a href="https://www.facebook.com/RisingFilmsAsia" target="_blank">
        <img class="bottom-fb" v-lazy="require('@/assets/img/icon/fb.png')" alt="fb">
      </a>
      <a href="https://www.instagram.com/risingfilmsasia/" target="_blank">
        <img v-lazy="require('@/assets/img/icon/ig.png')" alt="ig">
      </a>
      <img @click="sendMail" v-lazy="require('@/assets/img/icon/mail.png')" alt="mail">
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
    sendMail() {
      window.location.href = "mailto:info@rising-film.com?subject="+"&body="
    }
  },
  watch: {
    '$route.name': {
      handler: function(route) {
        
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
      opacity: 0.7;
      transition: all 0.4s;
      transition-timing-function: ease-in-out;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }
    }
  }

  &-fb {
    width: 10px !important;
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
    text-align: right;
  }
}

}


</style>