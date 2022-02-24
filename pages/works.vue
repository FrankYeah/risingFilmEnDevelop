<template>
  <div id="development" class="develop">
    <div class="develop-title-box">
      <generalTitle :title="'Works'"></generalTitle>
      <div class="develop-scroll">
        <div @click="scrollTo('development')">Development</div>
        <div @click="scrollTo('production')">Production</div>
        <div @click="scrollTo('other')">Other Works</div>
      </div>
    </div>
    <div class="develop-headtop"></div>
    <div class="develop-swiper-box">
      <div class="develop-head">
        <div class="develop-head-row">
          <div>Development</div>
          <div>Translating Taiwan's diverse cultural</div>
        </div>
        <div @click="isMorePopup = true" class="develop-head-more">Learn More &gt;</div>
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
    </div>

    <div id="production" class="develop-swiper-box">
      <div class="develop-head">
        <div class="develop-head-row">
          <div>Production</div>
          <div>Translating Taiwan's diverse cultural and creative industries to develop Taiwan's soft power</div>
        </div>
        <div @click="isMorePopup = true" class="develop-head-more">Learn More &gt;</div>
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
          <div>Translating Taiwan's diverse cultural and creative industries to develop Taiwan's soft power</div>
        </div>
        <div @click="isMorePopup = true" class="develop-head-more">Learn More &gt;</div>
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
                <img class="develop-popup-stage" :src="stage.name" alt="post">
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
        <div class="develop-popups-head">台灣故事 國際觀眾</div>
        <div class="develop-popups-text">
          持續扶植影視人才、得獎導演、新銳導演
          擴大故事來源至出版、劇本獎
          手握近400部影視優先開發授權之作品
          從開發、編劇與企劃開始，就導入虛擬製作思維
          擴大影視敘事的格局與可能性
          讓台灣作品持續登上國際舞台
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { developList } from '@/assets/list/developList'
import { productionList } from '@/assets/list/productionList'
import { otherList } from '@/assets/list/otherList'
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
      isPostPopup: false,
      isMorePopup: false,
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
        scrollbar: {
          el: ".swiper-scrollbar",
        },
        autoplay: {
          disableOnInteraction: false
        },
        breakpoints: {
          1300: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          620: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          500: {
            slidesPerView: 'auto',
            spaceBetween: -120,
          },
          400: {
            slidesPerView: 'auto',
            spaceBetween: -60,
          },
          340: {
            slidesPerView: 'auto',
            spaceBetween: -30,
          },
          340: {
            slidesPerView: 'auto',
            spaceBetween: -20,
          },
          320: {
            slidesPerView: 'auto',
            spaceBetween: 0,
          }
        }
      },
      swiperOption2: {
        scrollbar: true,
        mousewheel: true,
        scrollbar: {
          el: ".swiper-scrollbar",
        },
        autoplay: {
          disableOnInteraction: false
        },
        breakpoints: {
          1300: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          340: {
            slidesPerView: 2,
            spaceBetween: -30,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 0,
          }
        }
      }
    }
  },
  mounted() {
    if(this.$route.hash != '') {
      this.scrollTo('href')
    }
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
    switchMorePopup (isPopup) {
      this.isMorePopup = isPopup
    },
    scrollTo(position) {
      let tempId
      if(position == 'href') {
        tempId = this.$route.hash.substring(1, this.$route.hash.length)
      } else {
        tempId = position
      }      
      document.getElementById(tempId).scrollIntoView({ behavior: 'smooth' })
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

.develop {

  &-title-box {
    position: fixed;
    top: 150px;
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
        border-bottom: 1px solid white;
      }
    }
  }

  &-headtop {
    padding-top: 200px;
  }

  &-swiper-box {
    margin: 30px 0px 140px 13%;

    &:last-child {
      margin: 30px 0px 94px 13%;
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
        font-weight: 900;
        opacity: 1;
      }

      & div:last-child {
        width: 370px;
        line-height: 1.2;
        opacity: 0.5;
      }
    }

    &-more {
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
      line-height: 1.3;
      font-size: 14px;
      opacity: 0.5;
    }

    &-swiper-box {
      margin-top: 25px;
    }

    &-swiper {

    }

    &-slide {

    }

    &-stage {
      width: 136px;
    }

    &-awards {
      display: flex;
      flex-wrap: wrap;
      margin-top: 16px;
    }

    &-award {
      width: 120px;
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
      align-items: center;
      max-width: 288px;
      margin: 0px 27px;
      padding: 84px 24px 56px;
      background-color: #29292A;
    }

    &-close {
      position: absolute;
      top: 33px;
      right: 19px;
      width: 20px;
      opacity: 0.5;
      transition: all 0.4s;
      transition-timing-function: ease-in-out;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }
    }

    &-head {
      font-weight: bold;
      font-size: 24px;
    }

    &-text {
      margin-top: 24px;
      font-size: 14px;
      text-align: center;
      line-height: 32px;
      
      opacity: 0.5;
    }
  }
  
}

@media( max-width: 1023px ){

.develop {

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
    margin: 92px 0px 86px 27px;
  }

  &-head {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px 0px 34px 0px;
    font-size: 14px;

    &-row {
      width: 50%;
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
      margin-right: 20px;
    }

  }

  &-swiper {

  }

  &-slide {
    padding-bottom: 32px;
  }

  .swiper-scrollbar {
    
  }

  .swiper-scrollbar-drag {

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
      width: 120px;
    }

    &-awards {
      justify-content: space-between;
    }

    &-award {
      max-width: 180px;
      width: 45%;
      margin: 0px 0px 10px 0px;
    }
  }
  
}

}


</style>