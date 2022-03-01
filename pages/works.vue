<template>
  <div id="development" class="develop">
    <div class="develop-title-outer">
      <div class="develop-title-box">
        <generalTitle :title="'Works'"></generalTitle>
        <div class="develop-scroll">
          <div :class="[{'develop-scroll-current': currentPosition == 'development'}]" @click="scrollTo('development')">Development</div>
          <div :class="[{'develop-scroll-current': currentPosition == 'production'}]" @click="scrollTo('production')">Production</div>
          <div :class="[{'develop-scroll-current': currentPosition == 'other'}]" @click="scrollTo('other')">Other Works</div>
        </div>
      </div>
    </div>
    <div class="develop-headtop"></div>
    <div class="develop-swiper-box">
      <div class="develop-head">
        <div class="develop-head-row">
          <div>Development</div>
          <div>To translate diverse cultural and creative industries in Taiwan.<br>To develop Taiwanese soft power.</div>
        </div>
        <div @click="switchMorePopup('development')" class="develop-head-more">Learn More &gt;</div>
      </div>
      <swiper class="swiper develop-swiper" :options="swiperOption" ref="mySwiper">
        <swiper-slide class="develop-slide"
          v-for="(develop, index) in developList"
          :key="index"
        >
          <div @click="showPopup(index, 'develop')">
            <div class="develop-post-box">
              <img class="develop-post" :src="develop.post" alt="post">
            </div>
            <div class="develop-title">{{ develop.name }}</div>
            <div class="develop-date">{{ develop.date }}</div>
          </div>
        </swiper-slide>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
      </swiper>
      <div class="develop-hint">
        <div>Scroll Down</div>
        <div class="develop-hint-box">
          <div class="develop-hint-line"></div>
        </div>
      </div>
    </div>

    <div id="production" class="develop-swiper-box">
      <div class="develop-head">
        <div class="develop-head-row">
          <div>Production</div>
          <div>To be based in Taiwan, seeking international achievements. To look for international collaboration.</div>
        </div>
        <div @click="switchMorePopup('production')" class="develop-head-more">Learn More &gt;</div>
      </div>
      <swiper class="swiper develop-swiper" :options="swiperOption" ref="mySwiper">
        <swiper-slide class="develop-slide"
          v-for="(develop, index) in productionList"
          :key="index"
        >
          <div @click="showPopup(index, 'production')">
            <div class="develop-post-box">
              <img class="develop-post" :src="develop.post" alt="post">
            </div>
            <div class="develop-title">{{ develop.name }}</div>
            <div class="develop-date">{{ develop.date }}</div>
          </div>
        </swiper-slide>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
      </swiper>
    </div>


    <div id="other" class="develop-swiper-box">
      <div class="develop-head">
        <div class="develop-head-row">
          <div>Other Works</div>
          <div></div>
        </div>
        <!-- <div @click="isMorePopup = true" class="develop-head-more">Learn More &gt;</div> -->
      </div>
      <swiper class="swiper develop-swiper" :options="swiperOption" ref="mySwiper">
        <swiper-slide class="develop-slide"
          v-for="(develop, index) in otherList"
          :key="index"
        >
          <div @click="showPopup(index, 'other')">
            <div class="develop-post-box">
              <img class="develop-post" :src="develop.post" alt="post">
            </div>
            <div class="develop-title">{{ develop.name }}</div>
            <div class="develop-date">{{ develop.date }}</div>
          </div>
        </swiper-slide>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
      </swiper>
    </div>



    <generalPopup :isShowPopup="isPostPopup" @switchPopup="switchPopup">
      <div class="develop-popup-row">
        <img class="develop-popup-post" :src="selectedFilm.post" alt="post">
        <div class="develop-popup-box">
          <div class="develop-popup-title">{{ selectedFilm.name }}</div>
          <div class="develop-popup-date">{{ selectedFilm.date }}</div>
          <div class="develop-popup-desc">{{ selectedFilm.desc }}</div>
          <div class="develop-popup-swiper-box">
            <swiper class="swiper develop-popup-swiper" :options="swiperOption2" ref="mySwiper">
              <swiper-slide class="develop-popup-slide"
                v-for="(stage, index) in selectedFilm.stages"
                :key="index"
              >
                <div class="develop-popup-stage" v-lazy:background-image="`${stage.name}`"></div>
                <!-- <img class="develop-popup-stage" :src="stage.name" alt="post"> -->
              </swiper-slide>
              <div class="swiper-scrollbar" slot="scrollbar"></div>
            </swiper>
            
          </div>
          <div class="develop-popup-awards">
            <img class="develop-popup-award"
            v-for="(award, index) in selectedFilm.awards"
            :key="index" 
            :src="award.name" alt="post">
          </div>
        </div>
      </div>
    </generalPopup>

    <div v-if="isMorePopup" @click="isMorePopup = false" class="develop-popups">
      <div @click.stop class="develop-popups-box">
        <img @click="isMorePopup = false" class="develop-popups-close" :src="require('@/assets/img/icon/close.png')" alt="close">
        <div v-html="moreHead" class="develop-popups-head"></div>
        <div v-html="moreText" class="develop-popups-text"></div>
      </div>
    </div>
  </div>
</template>

<script>

import { developList } from '@/assets/list/developList'
import { productionList } from '@/assets/list/productionList'
import { otherList } from '@/assets/list/otherList'
export default {
  // head: {
  //   title: 'RISING FILMS',
  //   meta: [
  //     { name: 'keywords', content: 'RISING FILMS'},
  //   ]
  // },
  layout: 'default',
  components: {
    headTop: require('~/components/general-headtop.vue').default,
    generalTitle: require('~/components/general-title.vue').default,
    generalPopup: require('~/components/general-popup.vue').default
  },
  props: {
    
  },
  data () {
    return {
      developList: developList,
      productionList: productionList,
      otherList: otherList,
      scrollTop: null,
      currentPosition: 'development',
      isPostPopup: false,
      isMorePopup: false,
      moreHead: '',
      moreText: '',
      selectedFilm: {
        post: require('@/assets/img/develop/EX1.png'),
        name: 'Terrorizers',
        date: '2021.11',
        desc: `The movie "Youth Killing Love" mainly describes the story of six characters who seem to be unrelated, but influence each other, and finally get involved in the case of random murder of teenagers. Concept, to explore the living environment of the Z generation, surrounded by virtual, online games, Internet celebrities, social public opinion, family issues, etc... Carrying these virtual but real sights, in a murder case that everyone fears, we can See "no one is an outsider"`,
        stages: [
          { name: require('@/assets/img/about/partner1.png') }
        ],
        awards: [
          { name: require('@/assets/img/about/award1.png') }
        ]
      },
      swiperOption: {
        scrollbar: true,
        mousewheel: true,
        slidesPerView: "auto",
        spaceBetween: 36,
        scrollbar: {
          el: ".swiper-scrollbar",
        },
        autoplay: {
          disableOnInteraction: false,
          delay: 5000
        },
      },
      swiperOption2: {
        scrollbar: true,
        mousewheel: true,
        scrollbar: {
          el: ".swiper-scrollbar",
        },
        slidesPerView: "auto",
        spaceBetween: 12,
        autoplay: {
          disableOnInteraction: false
        },
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, false)
    if(this.$route.hash != '') {
      this.scrollTo('href')
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll, false)
  },
  computed: {

  },
  methods: {
    showPopup(index, type) {
      switch (type) {
        case 'develop':
          this.selectedFilm = this.developList[index]
          break;
        case 'production':
          this.selectedFilm = this.productionList[index]
          break;
        case 'other':
          this.selectedFilm = this.otherList[index]
          break;
        default:
      }
      
      this.isPostPopup = true
    },
    switchPopup (isPopup) {
      this.isPostPopup = isPopup
    },
    switchMorePopup (popup) {
      this.isMorePopup = true
      if(popup == 'development') {
        this.moreHead = `Local Taiwanese Stories with a Global Audience`
        this.moreText = `
        To continue to cultivate talents, award-winning and new directors.<br><br>
        To extend the sources of stories to novels and award-winning screenplays with priority development authorization of more than four hundred IP works.<br><br>
        To introduce virtual production concepts at the beginning of development, script writing and marketing, in order to extend the spectrum and possibilities of narratives for movies and TV shows and further promote Taiwanese works onto the world stage.

        `
      } else {
        this.moreHead = `Professional Productions; Domestic and Foreign Traditional and Virtual Movies and TV Projects.`
        this.moreText = `
        To continue to produce critically and commercially well received domestic projects while expanding internationally.<br><br>
        To coordinate foreign production teams’ projects in Taiwan and to offer backup virtual production technology to demonstrate our team’s proficiency and global vision.

        `
      }
    },
    scrollTo(position) {
      let tempId
      if(position == 'href') {
        tempId = this.$route.hash.substring(1, this.$route.hash.length)
      } else {
        tempId = position
      }      
      // document.getElementById(tempId).scrollIntoView({ behavior: 'smooth' })
      let currentScreen = window.screen.width
      let yOffset
      if(currentScreen > 1023) {
        yOffset = -200
      } else {
        yOffset = -180
      }
      
      const element = document.getElementById(tempId)
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

      window.scrollTo({top: y, behavior: 'smooth'});
    },
    handleScroll() {
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0
      let tempDevelopment = document.getElementById('development').offsetTop
      let tempProduction = document.getElementById('production').offsetTop
      let tempOther = document.getElementById('other').offsetTop
      if(this.scrollTop + 200 > tempOther) {
        this.currentPosition = 'other'
      } else if(this.scrollTop + 200 > tempProduction){
        this.currentPosition = 'production'
      } else {
        this.currentPosition = 'development'
      }

      
    }
  },
  watch: {
    '$route': {
      handler: function(route) {
        if(this.$route.hash != '') {
          this.scrollTo('href')
        }
      },
      deep: true
    },
  }
}
</script>

<style lang="scss" scoped>

$line-height: 60px;
$line-height-abs: -60px;

.develop {

  &-title-outer {
    position: fixed;
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 150px;
    padding-bottom: 16px;
    background-color: #171719;
    z-index: 2;
  }

  &-title-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 126px - 13%);
    margin: 0px 126px 0px 13%;
    z-index: 2;
  }

  &-scroll {
    display: flex;
    align-items: center;

    & div {
      margin-left: 24px;
      padding-bottom: 5px;
      transition: all 0.4s;
      transition-timing-function: ease-in-out;
      opacity: 0.2;
      
      cursor: pointer;

      &:hover {
        opacity: 1;
        border-bottom: 0.5px solid white;
      }
    }
  }

  &-scroll-current {
    opacity: 1 !important;
  }

  &-headtop {
    padding-top: 174px;
  }

  &-swiper-box {
    position: relative;
    margin: 30px 36px 140px 13%;

    &:last-child {
      margin: 30px 36px 94px 13%;
    }
  }

  &-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 126px 34px 0px;
    font-size: 14px;

    &-row {
      display: flex;
      align-items: center;

      & div:first-child {
        margin-right: 36px;
        font-size: 32px;
        font-weight: 300;
        opacity: 1;
      }

      & div:last-child {
        margin-right: 20px;
        text-align: justify;
      }
    }

    &-more {
      width: 124px;
      opacity: 0.5;
      transition: all 0.4s;
      transition-timing-function: ease-in-out;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }
    }

  }

  &-swiper {

  }

  &-slide {
    width: 250px;
    padding-bottom: 50px;
    cursor: pointer;

    &:hover {
      
      .develop-post {
        transform: scale(1.2);
      }
    }
  }

  .swiper-scrollbar {
    left: 0%;
    background-color: #FFFFFF;
    opacity: 0.3;
  }

  .swiper-scrollbar-drag {

  }

  &-hint {
    position: absolute;
    left: -13%;
    bottom: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    & div:first-child {
      writing-mode: tb-rl;
      transform: rotate(180deg);
      font-weight: 100;
    }

    &-box {
      width: 1px;
      height: $line-height;
      overflow: hidden;
    }

    &-line {
      width: 100%;
      height: 100%;
      display: block;
      background: linear-gradient(to bottom, #9D9D9D 50%, #171719 50%);
      background-position: 0 $line-height-abs;
      background-size: 100% 200%;
      margin-top: 13px;
      background-color: #171719;
      animation: lineAnimate 2.2s cubic-bezier(0.76, 0, 0.3, 1) forwards infinite;
    }
  }

  @keyframes lineAnimate {
    0%{
      background-position: 0 $line-height-abs;
    }
    75% {
      background-position: 0 0;
    }
    100%{
      background-position: 0 $line-height;
    }
  }

  &-post-box {
    overflow: hidden;
  }

  &-post {
    width: 250px;
    transition: all 0.4s;
    transition-timing-function: ease-in-out;
  }

  &-title {
    margin-top: 14px;
  }

  &-date {
    margin-top: 5px;
    font-size: 14px;
    opacity: 0.3;
  }

  &-popup {

    &-row {
      display: flex;
    }

    &-post {
      width: 275px;
      margin-right: 36px;
    }

    &-box {
      width: 630px;
    }

    &-title {
      font-size: 24px;
    }

    &-date {
      margin-top: 8px;
      opacity: 0.5;
    }

    &-desc {
      margin-top: 30px;
      font-size: 14px;
      text-align: justify;
      opacity: 0.5;
    }

    &-swiper-box {
      margin-top: 25px;
    }

    &-swiper {

    }

    &-slide {
      width: 136px;
    }

    &-stage {
      width: 136px;
      height: 80px;
      margin-bottom: 18px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
    }

    &-awards {
      display: flex;
      flex-wrap: wrap;
      margin-top: 16px;
    }

    &-award {
      width: 120px;
      height: 100%;
      margin: 0px 24px 10px 0px;
    }
  }

  &-popups {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(23, 23, 25, 0.8);
    z-index: 2;

    &-box {
      position: relative;
      display: flex;
      flex-direction: column;
      max-width: 458px;
      padding: 30px 27px 64px;
      background-color: #29292A;
    }

    &-close {
      position: absolute;
      top: 33px;
      right: 27px;
      width: 27px;
      opacity: 0.5;
      transition: all 0.4s;
      transition-timing-function: ease-in-out;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }
    }

    &-head {
      margin-top: 44px;
      font-weight: bold;
      font-size: 24px;
    }

    &-text {
      margin-top: 32px;
     text-align: justify;
      font-size: 14px;
      
      opacity: 0.5;
    }
  }
  
}

@media( max-width: 1023px ){

.develop {
  
  &-title-outer {
    position: fixed;
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 145px;
    padding-bottom: 16px;
    background-color: #171719;
    z-index: 2;
  }

  &-title-box {
    top: 80px;
    flex-direction: column;
    justify-content: initial;
    align-items: initial;
    width: 100%;
    margin: 0px;
    padding: 0px;

    & div:first-child {
      padding: 0px 27px;
    }
  }

  &-scroll {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 28px;

    & div:nth-child(1) {
      margin: 0px;
      padding: 0px;
    }

    & div:nth-child(2) {
      margin: 0px 28px;
      padding: 0;
    }

    & div:nth-child(3) {
      margin: 0px;
      padding: 0px;
    }
  }

  &-headtop {
    padding-top: 83px;
  }

  &-swiper-box {
    margin: 92px 36px 86px 27px;
  }

  &-head {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px 0px 34px 0px;
    font-size: 14px;

    &-row {
      flex-direction: column;
      align-items: initial;

      & div:first-child {
        margin-right: 0px;
        font-size: 24px;
      }

      & div:last-child {
        width: 100%;
        margin-top: 10px;
      }
    }

    &-more {
      position: absolute;
      top: 4px;
      right: 0px;
      width: auto;
      margin-right: 20px;
    }

  }

  &-swiper {

  }

  &-slide {
    width: 286px;
    padding-bottom: 32px;
  }

  .swiper-scrollbar {
    
  }

  .swiper-scrollbar-drag {

  }

  &-hint {
    display: none;
  }

  &-post {
    width: 286px;
  }

  &-title {
    margin-top: 10px;
    font-size: 18px;
  }

  &-date {
    
  }

  &-popup {

    &-row {
      flex-direction: column;
      align-items: center;
    }

    &-post {
      width: 160px;
      margin-right: 0px;
    }

    &-box {
      width: 100%;
    }

    &-title {
      margin-top: 30px;
      text-align: center;
    }

    &-date {
      text-align: center;
    }

    &-desc {
      margin-top: 12px;
    }

    &-swiper-box {
      margin-top: 32px;
    }

    &-swiper {

    }

    &-slide {
      
    }

    &-stage {
      
    }

    &-awards {
      justify-content: space-between;
    }

    &-award {
      max-width: 180px;
      width: 45%;
      height: 100%;
      margin: 0px 0px 10px 0px;
    }
  }

  &-popups {
    

    &-box {
      margin: 0px 24px;
    }

    &-close {
      right: 19px;
    }

    &-head {
      font-size: 18px;
    }

    &-text {
      font-size: 14px;
    }
  }
  
}

}


</style>