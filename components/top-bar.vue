<template>
  <div class="top">
    
    <nuxt-link class="top-logo" to="/">
      <img
        :src="require('@/assets/img/icon/logo.png')"
        alt="logo"
      >
    </nuxt-link>
    <img @click="isShowMenu = true"
      class="top-menu"
      :src="require('@/assets/img/icon/menu.png')"
      alt="menu"
    >
    

    <!-- popup -->
    <transition name="fade">
      <div v-if="isShowMenu"
      :class="[`top-popup`]"
      >
        <div class="top-popup-row">
          <div class="top-popup-animate5">
            <a href="https://www.risingfilms.com.tw" target="_blank" class="top-popup-lang" style="opacity: 0.3;">中</a>
            ｜
            <span>EN</span>
          </div>
          <img @click="closeMenu"
            class="top-popup-animate6"
            :src="require('@/assets/img/icon/close.png')"
            alt="close"
          >
        </div>
        <div class="top-popup-link">
          <nuxt-link to="/about">
            <div @click="closeMenu"
              @mouseover="hoverLink('about')" 
              @mouseleave="leaveLink"
              :class="[`top-popup-href top-popup-href1 top-popup-animate1`,
              {'top-popup-href-dark': !isHover.about},
              {'top-popup-href-light': isAllLight}]"
            >About</div>
            <div @click="closeMenu" :class="['top-popup-line', {'top-popup-line-show top-popup-line1': isHover.about}]"></div>
          </nuxt-link>

          <div @click="isHover.developmentIn = true"
            @mouseover="hoverLink('development')"
            :class="['top-popup-href top-popup-href2 top-popup-animate2', {'top-popup-href-dark': !isHover.development}, {'top-popup-href-light': isAllLight}]"
          >Works</div>
          <div @click="closeMenu" @mouseover="hoverLink('development')" :class="['top-popup-line', {'top-popup-line-show top-popup-line2': isHover.development}]" ></div>

          <div v-if="isHover.developmentIn"
            @mouseover="hoverLink('development')"
            class="top-popup-href-s-box"
          >
            <nuxt-link to="/works#development">
              <div @click="closeMenu"
                @mouseover="hoverLink('development')"
                class="top-popup-href-s"
              >Development</div>
            </nuxt-link>
            <nuxt-link to="/works#production">
              <div @click="closeMenu"
                @mouseover="hoverLink('development')"
                class="top-popup-href-s"
              >Production</div>
            </nuxt-link>
            <nuxt-link to="/works#other">
              <div @click="closeMenu"
                @mouseover="hoverLink('development')"
                class="top-popup-href-s top-popup-href-s-last"
              >Other Works</div>
            </nuxt-link>
          </div>
          <nuxt-link to="/virtual">
            <div @click="closeMenu"
              @mouseover="hoverLink('virtual')" 
              @mouseleave="leaveLink" 
              :class="['top-popup-href top-popup-href4 top-popup-animate3', {'top-popup-href-dark': !isHover.virtual}, {'top-popup-href-light': isAllLight}]"
            >Virtual Production</div>
            <div @click="closeMenu" :class="['top-popup-line', {'top-popup-line-show top-popup-line4': isHover.virtual}]"></div>
          </nuxt-link>
          <nuxt-link to="/contact">
            <div @click="closeMenu"
              @mouseover="hoverLink('contact')" 
              @mouseleave="leaveLink" 
              :class="['top-popup-href top-popup-href5 top-popup-animate4', {'top-popup-href-dark': !isHover.contact}, {'top-popup-href-light': isAllLight}]"
            >Contact</div>
            <div @click="closeMenu" :class="['top-popup-line', {'top-popup-line-show top-popup-line5': isHover.contact}]"></div>
          </nuxt-link>
        </div>
      </div>
    </transition>
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
        developmentIn: false,
        virtual: false,
        contact: false ,
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
            this.isHover.developmentIn = false
            this.isHover.development = false
            break;
          case 'development':
            this.isHover.development = true
            this.isHover.developmentIn = true
            break;
          case 'virtual':
            this.isHover.virtual = true
            this.isHover.developmentIn = false
            this.isHover.development = false
            break;
          case 'contact':
            this.isHover.contact = true
            this.isHover.developmentIn = false
            this.isHover.development = false
            break;
          default:
        }
    },
    leaveLink() {
      this.isHover.about = false
      this.isHover.development = false
      this.isHover.developmentIn = false
      this.isHover.virtual = false
      this.isHover.contact = false
    },
    closeMenu() {
      this.isShowMenu = false
      this.leaveLink()
    }
  },
  watch: {
    isHover: {
      handler: function() {
        this.isAllLight = false
        setTimeout(()=> {
          if(!this.isHover.about && !this.isHover.development && !this.isHover.developmentIn && !this.isHover.virtual && !this.isHover.contact) {
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
  z-index: 3;

  &-logo {
    position: fixed;
    top: 32px;
    left: 32px;

    & img {
      width: 42px;
      height: 100%;
      transition: all 0.4s;
      transition-timing-function: ease-in-out;
      cursor: pointer;

      &:hover {
      }
    }

  }

  &-menu {
    position: fixed;
    top: 32px;
    right: 32px;
    width: 52px;
    height: 52px;
    opacity: 0.5;
    transition: all 0.4s;
    transition-timing-function: ease-in-out;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  &-row {
    display: flex;
    justify-content: space-between;

    & img {
      cursor: pointer;
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
    right: 0px;
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
        width: 30px;
        opacity: 0.5;
        transition: all 0.4s;
        transition-timing-function: ease-in-out;
        cursor: pointer;

        &:hover {
          opacity: 1;
        }
      }
    }

    &-lang {
      transition: all 0.4s;
      transition-timing-function: ease-in-out;
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
      transition: all 0.4s;
      transition-timing-function: ease-in-out;
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
      width: 230px;
    }

    &-href4 {
      width: 580px;
    }

    &-href5 {
      width: 260px;
    }

    &-animate1 {
      animation: hrefAnimate; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 1s;
      animation-delay: 0.5s;
      animation-fill-mode: backwards;
      animation-timing-function: cubic-bezier(.94,-0.01,.08,1);
    }

    &-animate2 {
      animation: hrefAnimate; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 1s;
      animation-delay: 0.6s;
      animation-fill-mode: backwards;
      animation-timing-function: cubic-bezier(.94,-0.01,.08,1);
    }

    &-animate3 {
      animation: hrefAnimate; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 1s;
      animation-delay: 0.7s;
      animation-fill-mode: backwards;
      animation-timing-function: cubic-bezier(.94,-0.01,.08,1);
    }

    &-animate4 {
      animation: hrefAnimate; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 1s;
      animation-delay: 0.8s;
      animation-fill-mode: backwards;
      animation-timing-function: cubic-bezier(.94,-0.01,.08,1);
    }

    &-animate5 {
      animation: hrefAnimate; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 1s;
      animation-delay: 1.1s;
      animation-fill-mode: backwards;
      animation-timing-function: cubic-bezier(.94,-0.01,.08,1);
    }

    &-animate6 {
      animation: closeAnimate; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 1s;
      animation-delay: 1.1s;
      animation-fill-mode: backwards;
      animation-timing-function: cubic-bezier(.94,-0.01,.08,1);
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
      width: 210px;
    }

    &-line4 {
      width: 580px;
    }

    &-line5 {
      width: 260px;
    }

    &-href-s-box {
      display: flex;
      padding: 7px 0px 45px;
      font-style: italic;
      font-size: 36px;

      & a:first-child {
        margin-top: 0px;
      }
    }

    &-href-s {
      padding-right: 60px;
      transition: all 0.4s;
      transition-timing-function: ease-in-out;
      opacity: 0.15; 

      &:hover {
        opacity: 1;
      }
    }

    &-href-s-last {
      padding-right: 0px;
    }
  }
  
}

// 動態

// bg 動態
.fade-enter-active {
  transition: width .6s;
  transition-timing-function: cubic-bezier(.94,-0.01,.08,1);
}

.fade-enter {
  width: 0px;
}

.fade-leave {
  width: 0px;
}

@keyframes hrefAnimate {
  0%   { opacity: 0; transform: translateX(60px); }
  30%  { opacity: 0; }
  66%  {  }
  99%  { opacity: 1; transform: translateX(0px); }
}

@keyframes closeAnimate {
  0%   { opacity: 0; transform: translateX(60px); }
  30%  { opacity: 0; }
  66%  {  }
  99%  { opacity: 0.5; transform: translateX(0px); }
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

    &-href-s-box {
      flex-direction: column;
      padding: 0px 0px 16px;
      font-size: 24px;

      & a:first-child {
        
      }
    }

    &-href-s {
      padding: 0px 0px 18px;
      opacity: 1; 
    }

    &-href-s-last {
      padding: 0px;
    }
  }
  
}

}


</style>