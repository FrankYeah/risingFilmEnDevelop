<template>
  <div class="top">
    
    <router-link class="top-logo" to="/">
      <img
        :src="require('@/assets/img/icon/logo.png')"
        alt="logo"
      >
    </router-link>
    <img @click="isShowMenu = true"
      class="top-menu"
      :src="require('@/assets/img/icon/menu.png')"
      alt="menu"
    >
    

    <!-- popup -->
    <div v-if="isShowMenu" class="top-popup">
      <div class="top-popup-row">
        <div>
          <span class="top-popup-lang" style="opacity: 0.3;">中</span>
          ｜
          <span>EN</span>
        </div>
        <img @click="isShowMenu = false"
          :src="require('@/assets/img/icon/close.png')"
          alt="close"
        >
      </div>
      <div class="top-popup-link">
        <router-link to="/about">
          <div @click="isShowMenu = false"
            @mouseover="hoverLink('about')" 
            @mouseleave="leaveLink" 
            :class="['top-popup-href top-popup-href1', {'top-popup-href-dark': !isHover.about}, {'top-popup-href-light': isAllLight}]"
          >About</div>
          <div @click="isShowMenu = false" :class="['top-popup-line', {'top-popup-line-show top-popup-line1': isHover.about}]"></div>
        </router-link>
        <router-link to="/development">
          <div @click="isShowMenu = false"
            @mouseover="hoverLink('development')" 
            @mouseleave="leaveLink" 
            :class="['top-popup-href top-popup-href2', {'top-popup-href-dark': !isHover.development}, {'top-popup-href-light': isAllLight}]"
          >Development</div>
          <div @click="isShowMenu = false" :class="['top-popup-line', {'top-popup-line-show top-popup-line2': isHover.development}]"></div>
        </router-link>
        <router-link to="/virtual">
          <div @click="isShowMenu = false"
            @mouseover="hoverLink('virtual')" 
            @mouseleave="leaveLink" 
            :class="['top-popup-href top-popup-href4', {'top-popup-href-dark': !isHover.virtual}, {'top-popup-href-light': isAllLight}]"
          >Virtual Production</div>
          <div @click="isShowMenu = false" :class="['top-popup-line', {'top-popup-line-show top-popup-line4': isHover.virtual}]"></div>
        </router-link>
        <router-link to="/contact">
          <div @click="isShowMenu = false"
            @mouseover="hoverLink('contact')" 
            @mouseleave="leaveLink" 
            :class="['top-popup-href top-popup-href5', {'top-popup-href-dark': !isHover.contact}, {'top-popup-href-light': isAllLight}]"
          >Contact</div>
          <div @click="isShowMenu = false" :class="['top-popup-line', {'top-popup-line-show top-popup-line5': isHover.contact}]"></div>
        </router-link>
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
      isAllLight: true,
      isHover: {
        about: false,
        development: false,
        virtual: false,
        contact: false 
      }
    }
  },
  computed: {

  },
  methods: {
    goHomePage() {
      this.$router.push('/')
    },
    hoverLink(link) {
      switch (link) {
          case 'about':
            this.isHover.about = true
            break;
          case 'development':
            this.isHover.development = true
            break;
          case 'virtual':
            this.isHover.virtual = true
            break;
          case 'contact':
            this.isHover.contact = true
            break;
          default:
        }
      
    },
    leaveLink() {
      this.isHover.about = false
      this.isHover.development = false
      this.isHover.virtual = false
      this.isHover.contact = false
      
    }
  },
  watch: {
    isHover: {
      handler: function() {
        this.isAllLight = false
        setTimeout(()=> {
          if(!this.isHover.about && !this.isHover.development && !this.isHover.virtual && !this.isHover.contact) {
            this.isAllLight = true
          }
        }, 500)
      },
      deep: true,
      immediate: true
    },
  }
}
</script>

<style lang="scss">

.top {
  position: fixed;
  top: 0px;
  left: 0px;
  width: calc(100% - 64px);
  z-index: 2;

  &-logo {
    position: fixed;
    top: 32px;
    left: 32px;

    & img {
      width: 42px;
      height: 100%;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }

  }

  &-menu {
    position: fixed;
    top: 32px;
    right: 32px;
    width: 52px;
    height: 52px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

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
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }
      }
    }

    &-lang {
      cursor: pointer;

      &:hover {
        opacity: 1 !important;
      }
    }

    &-link {
      display: flex;
      flex-direction: column;
      font-size: 72px;

      & a:first-child {
        margin-top: 20px;
      }
    }

    &-href {
      font-style: italic;
      padding: 14px 0px;
      cursor: pointer;

      :hover {
        color: white;
      }
    }

    &-href-light {
      opacity: 1 !important;
    }

    &-href-dark {
      opacity: 0.05;
    }

    &-href1 {
      width: 223px;
    }

    &-href2 {
      width: 430px;
    }

    &-href4 {
      width: 580px;
    }

    &-href5 {
      width: 260px;
    }

    &-line {
      width: 1px;
      height: 1.5px;
      background-color: transparent;
      transition: 0.3s;
    }

    &-line-show {
      background-color: white;
    }

    &-line-hide {
      background-color: transparent;
    }

    &-line1 {
      width: 200px;
    }

    &-line2 {
      width: 430px;
    }

    &-line4 {
      width: 580px;
    }

    &-line5 {
      width: 260px;
    }
  }
  
}

@media( max-width: 1023px ){

.top {
  

  &-logo {
    top: 29px;
    left: 20px;

    & img {
    }

  }

  &-menu {
    top: 29px;
    right: 20px;
  }

  &-row {
    

    & img {
      
    }
    
    & img:first-child {
      
    }

    & img:last-child {
      
    }
  }

  &-popup {
    

    &-row {
      font-size: 14px;

      & img {
        
      }
    }

    &-lang {

    }

    &-link {
      font-size: 48px;
      line-height: 1.1;

      & a:first-child {
        
      }
    }

    &-href {
      width: 270px !important;
      padding: 24px 0px;
    }

    &-href-light {
      
    }

    &-href-dark {
      opacity: 1;
    }

    &-href1 {
      
    }

    &-href2 {
      
    }

    &-href4 {
      
    }

    &-href5 {
      
    }

    &-line {
      
    }

    &-line-show {
      background-color: transparent;
    }

    &-line-hide {
      
    }

    &-line1 {
      
    }

    &-line2 {
      
    }

    &-line4 {
      
    }

    &-line5 {
      
    }
  }
  
}

}


</style>