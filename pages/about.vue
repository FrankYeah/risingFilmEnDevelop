<template>
  <div class="about">
    <boxWidth>
      <headTop>
        <generalTitle :title="'About'"></generalTitle>
      </headTop>
      
      <div class="about-pre">Tapping into potential resource and upgrade the skills of the local films and TV talents.<br>Integrating resources, creativity, business models to create a new future of Taiwanese Films and TVs.</div>
    </boxWidth>
    <div class="about-post-box">
      <img class="about-post" :src="require('@/assets/img/about/post.jpg')" alt="post">
    </div>
    <boxWidth>
      <div class="about-post-text">In 2022, Rising Films is expanding its ambitious plan, and is in collaboration with the other award-winning team in the field. </div>
      <div class="about-post-text2">Rising Film is joining the Virtual Production Studio in Hollywood to make films with international standard.</div>
    </boxWidth>

    <div class="about-banner-box">
      <img class="about-banner" :src="require('@/assets/img/about/banner2.png')" alt="post">
    </div>

    <boxWidth>
      <div class="about-banner-text">Our marketing department integrates the film production aspect and market, aims for upgrading potential value for local film industry, working through different mediums and various commmunications, building up our brand value, tapping on the abilitity of each skilled member of the film industry in different disciplines, and promoting the best Virtual Production creative mindset and production work-flow.</div>
      <div class="about-banner-text2">The international advisors with experiences of setting up Virtual Production will participate with our team in building a 270-degree oval with LED doors Virtual Production Studio in Asia region, creating a smooth Virtual Production pipeline.</div>
      <div class="about-title">
        <div>Professional Teams</div>
        <div>To include development, production and marketing talents.<br>To create a one-stop business model.</div>
      </div>
      <div class="about-intro">
        <div class="about-team-box" 
          v-for="(team, index) in teamList"
          :key="index"
          @click="selectPerson(index)"
        >
          <div class="about-person-box">
            <img class="about-person" v-lazy="team.person" alt="person">
          </div>  
          <div class="about-name">{{ team.name }}</div>
          <div class="about-name-title">{{ team.title }}</div>
        </div>
        
      </div>
      <div class="about-partner-title">Partner</div>
      <div class="about-partner-box">
        <img class="about-partner"
          v-for="(partner, index) in partnerList"
          :key="index"
          v-lazy="partner.link" alt="person"
        >
      </div>
      <generalPopup :isShowPopup="isPersonPopup" @switchPopup="switchPopup">
        <div class="about-popup-row">
          <img class="about-popup-person" :src="selectedPerson.person2" alt="post">
          <div class="about-popup-column">
            <div class="about-popup-title">{{ selectedPerson.name }}</div>
            <div class="about-popup-sub">{{ selectedPerson.title }}</div>
            <div class="about-popup-desc" v-html="selectedPerson.desc"></div>
            <div v-if="selectedPerson.awards.length != 0" class="about-popup-awards">Awards</div>
            <div class="about-popup-award"
              v-for="(award, index) in selectedPerson.awards"
              :key="index">{{ award.name }}</div>
          </div>
        </div>
      </generalPopup>
    </boxWidth>
  </div>
</template>

<script>

import { teamList } from '@/assets/list/teamList'
import { partnerList } from '@/assets/list/partnerList'
export default {
  // head: {
  //   title: 'RISING FILMS',
  //   meta: [
  //     { name: 'keywords', content: 'RISING FILMS'},
  //   ]
  // },
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
      teamList: teamList,
      partnerList: partnerList,
      isPersonPopup: false,
      selectedPerson: {
        name: '',
        title: '',
        person2: require('@/assets/img/about/Eliza2.png'),
        desc: '',
        awards: []
      }
    }
  },
  computed: {

  },
  methods: {
    selectPerson(index) {
      this.isPersonPopup = true
      this.selectedPerson = teamList[index]
    },
    switchPopup (isPopup) {
      this.isPersonPopup = isPopup
    }
  },
  watch: {
    
  }
}
</script>

<style lang="scss" scoped>

.about {
  padding-bottom: 60px;

  &-pre {
    margin-top: 32px;
    font-size: 28px;
    text-align: justify;
  }

  &-post-box {
    text-align: center;
  }

  &-post {
    max-width: 1000px;
    width: 100%;
    padding: 0px 27px;
    margin-top: 54px;
    text-align: center;
  }

  &-post-text {
    margin-top: 53px;
    opacity: 0.7;
  }

  &-post-text2 {
    margin-top: 24px;
    text-align: justify;
    opacity: 0.7;
  }

  &-banner-box {
    text-align: center;
  }

  &-banner {
    max-width: 1000px;
    width: 100%;
    margin-top: 80px;
    padding: 0px 27px;
    text-align: center;
  }

  &-banner-text {
    margin-top: 80px;
    text-align: justify;
    opacity: 0.7;
  }

  &-banner-text2 {
    margin-top: 50px;
    text-align: justify;
    opacity: 0.7;
  }

  &-title {
    display: flex;
    align-items: center;
    margin-top: 112px;

    & div:first-child {
      width: 327px;
      margin-right: 48px;
      font-size: 32px;
    }

    & div:last-child {
      text-align: justify;
      font-size: 14px;
    }
  }

  &-intro {
    width: 900px;
    margin: 0px auto 25px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &-team-box {
    margin-top: 50px;
    text-align: center;
    cursor: pointer;

    &:hover {
      
      .about-person {
        transform: scale(1.1);
      }
    }
  }

  &-person-box {
    border-radius: 100%;
    overflow: hidden;
  }

  &-person {
    width: 260px;
    transition: all 0.4s;
    transition-timing-function: ease-in-out;
  }

  &-name {
    transform: translateY(-24px);
    font-size: 32px;
  }

  &-name-title {
    transform: translateY(-20px);
    opacity: 0.5;
  }

  &-partner-title {
    margin-top: 43px;
    font-size: 32px;
  }

  &-partner-box {
    width: 900px;
    margin: 0px auto 80px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &-partner {
    width: 195px;
    height: 100%;
  }

  &-popup {

    &-row {
      display: flex;
    }

    &-column {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &-person {
      width: 275px;
      margin-right: 36px;
    }

    &-title {
      font-size: 24px;
    }

    &-sub {
      margin-top: 12px;
      opacity: 0.5;
    }

    &-desc {
      margin: 23px 34px 0px 0px;
      font-size: 14px;
      text-align: justify;
      opacity: 0.5;
    }

    &-awards {
      margin: 32px 0px 12px;
    }

    &-award {
      margin-bottom: 8px;
      font-size: 14px;
      opacity: 0.5;
    }
  }
  
}

@media( max-width: 1023px ){

.about {
  padding-bottom: 0px;

  &-pre {
    margin-top: 26px;
    font-size: 20px;
  }

  &-post-box {
    
  }

  &-post {
    margin-top: 29px;
    padding: 0px;
  }

  &-post-text {
    margin-top: 48px;
  }

  &-post-text2 {
    margin-top: 36px;
  }

  &-banner-box {
    
  }

  &-banner {
    margin-top: 48px;
    padding: 0px;
  }

  &-banner-text {
    margin-top: 48px;
  }

  &-banner-text2 {
    margin-top: 36px;
  }

  &-title {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 64px;
    
    & div:first-child {
      margin-right: 0px;
      font-size: 24px;
    }

    & div:last-child {
      margin-top: 16px;
    }
  }

  &-intro {
    width: 100%;
  }

  &-team-box {
    max-width: 180px;
    width: 50%;
    margin-top: 32px;
  }

  &-person {
    width: 90%;
  }

  &-name {
    font-size: 18px;
  }

  &-name-title {
    width: 130px;
    margin: auto;
  }

  &-partner-title {
    font-size: 24px;
    margin: 50px 0px 50px;
  }

  &-partner-box {
    width: 100%;
  }

  &-partner {
    max-width: 180px;
    width: 45%;
    height: 100%;
  }

  &-popup {

    &-row {
      flex-direction: column;
      align-items: center;
    }

    &-column {
      display: block;
    }

    &-person {
      width: 157px;
      align-items: center;
      margin-right: 0px;
    }

    &-title {
      margin-top: 18px;
      text-align: center;
    }

    &-sub {
      margin-top: 2px;
      text-align: center;
      font-size: 18px;
      font-style: italic;
    }

    &-desc {
      margin: 13px 0px 0px 0px;
    }

    &-awards {
      font-size: 18px;
      margin: 24px 0px 18px;
    }

    &-award {
      
    }
  }
  
}

}


</style>