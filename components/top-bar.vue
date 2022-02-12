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
          <div @mouseover="hoverLink('about')" 
            @mouseleave="leaveLink" 
            :class="['top-popup-href top-popup-href1', {'top-popup-href-dark': !isHover.about}, {'top-popup-href-light': isAllLight}]"
          >About</div>
          <div :class="['top-popup-line', {'top-popup-line-show top-popup-line1': isHover.about}]"></div>
        </router-link>
        <router-link to="/production">
          <div @mouseover="hoverLink('production')" 
            @mouseleave="leaveLink" 
            :class="['top-popup-href top-popup-href3', {'top-popup-href-dark': !isHover.production}, {'top-popup-href-light': isAllLight}]"
          >Production</div>
          <div :class="['top-popup-line', {'top-popup-line-show top-popup-line3': isHover.production}]"></div>
        </router-link>
        <router-link to="/virtual">
          <div @mouseover="hoverLink('virtual')" 
            @mouseleave="leaveLink" 
            :class="['top-popup-href top-popup-href4', {'top-popup-href-dark': !isHover.virtual}, {'top-popup-href-light': isAllLight}]"
          >Virtual Production</div>
          <div :class="['top-popup-line', {'top-popup-line-show top-popup-line4': isHover.virtual}]"></div>
        </router-link>
        <router-link to="/contact">
          <div @mouseover="hoverLink('contact')" 
            @mouseleave="leaveLink" 
            :class="['top-popup-href top-popup-href5', {'top-popup-href-dark': !isHover.contact}, {'top-popup-href-light': isAllLight}]"
          >Contact</div>
          <div :class="['top-popup-line', {'top-popup-line-show top-popup-line5': isHover.contact}]"></div>
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
      this.isHover.production = false
      this.isHover.virtual = false
      this.isHover.contact = false
      
    }
  },
  watch: {
    isHover: {
      handler: function() {
        this.isAllLight = false
        setTimeout(()=> {
          if(!this.isHover.about && !this.isHover.production && !this.isHover.virtual && !this.isHover.contact) {
            this.isAllLight = true
            console.log(this.isAllLight)
          }
        }, 500)
        console.log(this.isAllLight)
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
      font-size: 64px;

      & a:first-child {
        margin-top: 40px;
      }
    }

    &-href {
      font-style: italic;
      padding: 20px 0px;
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
      width: 173px;
    }

    &-href2 {
      width: 378px;
    }

    &-href3 {
      width: 311px;
    }

    &-href4 {
      width: 520px;
    }

    &-href5 {
      width: 228px;
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
      width: 173px;
    }

    &-line2 {
      width: 378px;
    }

    &-line3 {
      width: 311px;
    }

    &-line4 {
      width: 510px;
    }

    &-line5 {
      width: 228px;
    }
  }
  
}


</style>