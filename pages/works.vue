<template>
  <div id="development" class="develop">
    <div class="develop-title-box">
      <headTop>
        <generalTitle :title="'Works'"></generalTitle>
      </headTop>
    </div>
    <div class="develop-swiper-box">
      <div class="develop-head">
        <div class="develop-head-row">
          <div>Development</div>
          <div>Translating Taiwan's diverse cultural and creative industries to develop Taiwan's soft power</div>
        </div>
        <div class="develop-head-more">Learn More &gt;</div>
      </div>
      <swiper class="swiper develop-swiper" :options="swiperOption" ref="mySwiper">
        <swiper-slide class="develop-slide"
          v-for="(develop, index) in developList"
          :key="index"
        >
          <div @click="showPopup(index)">
            <img class="develop-post" :src="develop.post" alt="post">
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
        <div class="develop-head-more">Learn More &gt;</div>
      </div>
      <swiper class="swiper develop-swiper" :options="swiperOption" ref="mySwiper">
        <swiper-slide class="develop-slide"
          v-for="(develop, index) in developList"
          :key="index"
        >
          <div @click="showPopup(index)">
            <img class="develop-post" :src="develop.post" alt="post">
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
        <div class="develop-head-more">Learn More &gt;</div>
      </div>
      <swiper class="swiper develop-swiper" :options="swiperOption" ref="mySwiper">
        <swiper-slide class="develop-slide"
          v-for="(develop, index) in developList"
          :key="index"
        >
          <div @click="showPopup(index)">
            <img class="develop-post" :src="develop.post" alt="post">
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
  </div>
</template>

<script>

import { developList } from '@/assets/list/developList'
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
      isPostPopup: false,
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
    // this.scrollTo()
    if(this.$route.hash != '') {
      this.scrollTo()
    }
  },
  computed: {

  },
  methods: {
    showPopup(index) {
      this.selectedFilm = this.developList[index]
      this.isPostPopup = true
    },
    switchPopup (isPopup) {
      this.isPostPopup = isPopup
    },
    scrollTo() {
      let tempId = this.$route.hash.substring(1, this.$route.hash.length)
      document.getElementById(tempId).scrollIntoView({ behavior: 'smooth' })
    }
  },
  watch: {
    '$route': {
      handler: function(route) {
        if(this.$route.hash != '') {
          this.scrollTo()
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
    margin-left: 13%;
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
      opacity: 0.8;
    }
  }

  .swiper-scrollbar {
    left: 0%;
    background-color: #FFFFFF;
    opacity: 0.3;
  }

  .swiper-scrollbar-drag {

  }

  &-post {
    width: 250px;
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
  
}

@media( max-width: 1023px ){

.develop {

  &-title-box {
    margin-left: 27px;
  }

  &-swiper-box {
    margin: 92px 0px 86px 27px;
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