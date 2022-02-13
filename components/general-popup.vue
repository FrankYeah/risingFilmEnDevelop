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
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
}


</style>