<template>
  <div v-if="isShowPopup"
    @click="switchPopup" 
    class="popup"
  >
    <div @click.stop class="popup-box">
      <img @click="switchPopup" class="popup-close" :src="require('@/assets/img/icon/close.png')" alt="close">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {
    isShowPopup: {
      type: Boolean
    },
  },
  data () {
    return {
      
    }
  },
  computed: {

  },
  methods: {
    switchPopup() {
      this.$emit('switchPopup', false)
    }
  },
  watch: {
    isShowPopup: {
      handler: function(change) {
        if (change) {
          // 點開手機版 popup 時，要避免畫面滑動
          let mo = function (e) { e.preventDefault() }
          document.body.style.overflow='hidden'
          document.addEventListener('touchmove', mo, false)
        } else {
          let mo = function (e) { e.preventDefault() } 
          document.body.style.overflow = ''
          document.removeEventListener('touchmove', mo, false)
        }
      },
    },
  }
}
</script>

<style lang="scss" scoped>

.popup {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(23, 23, 25, 0.8);
  z-index: 2;

  &-box {
    position: relative;
    width: 968px;
    padding: 32px;
    background-color: #29292A;
  }

  &-close {
    position: absolute;
    top: 32px;
    right: 32px;
    width: 39px;
    height: 39px;
    opacity: 0.5;
    transition: all 0.4s;
    transition-timing-function: ease-in-out;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
}

@media( max-width: 1023px ){

.popup {
  

  &-box {
    width: calc(100% - 54px);
    max-height: calc(100% - 92px);
    margin: 0px 27px;
    padding: 32px 16px 23px;
    overflow-y: scroll;
  }

  &-close {
    top: 32px;
    right: 20px;
  }
}

}


</style>