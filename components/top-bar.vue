<template>
  <div class="top">
    <div class="top-row">
      <img @click="$router.push('/')"
        :src="require('@/assets/img/icon/logo.png')"
        alt="logo"
      >
      <img @click="isShowMenu = true"
        :src="require('@/assets/img/icon/menu.png')"
        alt="menu"
      >
    </div>
    <div v-if="isShowMenu" class="top-popup">
      <div class="top-popup-row">
        <div>
          <span style="opacity: 0.3;">中</span>｜<span>EN</span>
        </div>
        <img @click="isShowMenu = false"
          :src="require('@/assets/img/icon/close.png')"
          alt="close"
        >
      </div>
      <div class="top-popup-link">
        <div @mouseover="hoverLink('about')" @mouseleave="leaveLink" class="top-popup-href top-popup-href1">About</div>
        <div :class="['top-popup-line', {'top-popup-line-show': isHover.about}]">5555</div>
        <div class="top-popup-href top-popup-href2">Development</div>
        <div class="top-popup-line top-popup-line2"></div>
        <div class="top-popup-href top-popup-href3">Production</div>
        <div class="top-popup-line top-popup-line3"></div>
        <div class="top-popup-href top-popup-href4">Virtual Production</div>
        <div class="top-popup-line top-popup-line4"></div>
        <div class="top-popup-href top-popup-href5">Contact</div>
        <div class="top-popup-line top-popup-line5"></div>
    </div>
    </div>
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
      isShowMenu: false,
      isHover: {
        about: false,
        development: false,
        production: false,
        virtual: false,
        contact: false 
      }
    }
  },
  computed: {

  },
  methods: {
    hoverLink(link) {
      switch (link) {
          case 'about':
            this.isHover.about = true
            break;
          case 'development':
            this.isHover.development = true
            break;
          case 'production':
            this.isHover.production = true
            break;
          case 'virtual':
            this.isHover.virtual = true
            break;
          case 'contact':
            this.isHover.contact = true
            break;
          default:
            console.log(link)
        }
      
    },
    leaveLink() {
      this.isHover.about = false
      this.isHover.development = false
      this.isHover.production = false
      this.isHover.virtual = false
      this.isHover.contact = false
    }
  },
  watch: {
    
  }
}
</script>

<style lang="scss">

.top {
  position: fixed;
  top: 0px;
  left: 0px;
  width: calc(100% - 64px);
  padding: 32px;

  &-row {
    display: flex;
    justify-content: space-between;

    & img {
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
    
    & img:first-child {
      width: 42px;
      height: 100%;
    }

    & img:last-child {
      width: 52px;
      height: 100%;
    }
  }

  &-popup {
    position: fixed;
    left: 0px;
    top: 0px;
    width: calc(100% - 64px);
    height: 100vh;
    padding: 32px 32px 0px 32px;
    background-color: #171719;

    &-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 24px;

      & img {
        width: 40px;
      }
    }

    &-link {
      display: flex;
      flex-direction: column;
      font-size: 64px;
    }

    &-href {
      padding: 18px 0px;
      cursor: pointer;
    }

    &-href1:hover {
      color: white;
    }

    &-href2 {
      
    }

    &-href3 {
      
    }

    &-href4 {
      
    }

    &-href5 {
      
    }

    &-line {
      height: 1.5px;
      background-color: transparent;
    }

    &-line-show {
      background-color: white;
    }

    &-line-hide {
      background-color: transparent;
    }

    &-line1 {

    }

    &-line2 {
      
    }

    &-line3 {
      
    }

    &-line4 {
      
    }

    &-line5 {
      
    }
  }
  
}


</style>