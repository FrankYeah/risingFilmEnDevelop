<template>
  <div class="about">
    <boxWidth>
      <headTop>
        <generalTitle :title="'About'"></generalTitle>
      </headTop>
      
      <div class="about-pre">Rising Films has been promoting talents in Taiwanese film industry and managing resources, ideas and business models, in hope of creating a new future</div>
    </boxWidth>
    <div class="about-post-box">
      <img class="about-post" :src="require('@/assets/img/about/post.jpg')" alt="post">
    </div>
    <boxWidth>
      <div class="about-post-text">2022 Vision for Rising Films/Collaboration with Award-winning Teams in the Industry</div>
      <div class="about-post-text2">Producer Widing Ho and director KUANG Sheng in charge of making international projects with virtual production teams in Hollywood.</div>
    </boxWidth>

    <div class="about-banner-box">
      <img class="about-banner" :src="require('@/assets/img/about/banner2.png')" alt="post">
    </div>

    <boxWidth>
      <div class="about-banner-text">Marketing Department integrating markets and productions, aiming at creating market values through crossover projects and multimedia to build brand values and relying on professionals’ expertise in all fields in the industry to promote virtual production ideas and ideals.</div>
      <div class="about-banner-text2">US virtual studio construction consultants to work on building a 270-degree circular arc LED virtual studio and establish an international filmmaking production operation procedure in Taiwan.</div>
      <div class="about-title">OUR TEAM</div>
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
          <div>
            <div class="about-popup-title">{{ selectedPerson.name }}</div>
            <div class="about-popup-sub">{{ selectedPerson.title }}</div>
            <div class="about-popup-desc">{{ selectedPerson.desc }}</div>
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
    line-height: 1.2;

  &-pre {
    margin-top: 32px;
    font-size: 32px;
  }

  &-post-box {
    text-align: center;
  }

  &-post {
    max-width: 1000px;
    width: 100%;
    margin-top: 54px;
    text-align: center;
  }

  &-post-text {
    margin-top: 53px;
  }

  &-post-text2 {
    margin-top: 24px;
  }

  &-banner-box {
    text-align: center;
  }

  &-banner {
    max-width: 1000px;
    width: 100%;
    margin-top: 80px;
    text-align: center;
  }

  &-banner-text {
    margin-top: 80px;
    opacity: 0.7;
  }

  &-banner-text2 {
    margin-top: 50px;
    opacity: 0.7;
  }

  &-title {
    margin-top: 118px;
    font-size: 48px;
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
    font-size: 48px;
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
  }

  &-popup {

    &-row {
      display: flex;
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
      margin-top: 24px;
      line-height: 1.3;
      font-size: 14px;
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
  }

  &-banner-text {
    margin-top: 48px;
  }

  &-banner-text2 {
    margin-top: 36px;
  }

  &-title {
    margin: 64px 0px 3px;
    font-size: 24px;
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
    margin: 32px 0px 50px;
  }

  &-partner-box {
    width: 100%;
  }

  &-partner {
    max-width: 180px;
    width: 45%;
  }

  &-popup {

    &-row {
      flex-direction: column;
      align-items: center;
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
      margin-top: 13px;
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