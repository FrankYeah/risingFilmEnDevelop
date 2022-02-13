<template>
  <div class="about">
    <boxWidth>
      <headTop>
        <generalTitle :title="'About'"></generalTitle>
      </headTop>
      <div class="about-pre1">Rising Films gathers resources to inject Taiwanese film and television talents</div>
      <div class="about-pre2">
        <div>Resources</div>
        <div>Creativity</div>
        <div>Business Models</div>
      </div>
      <div class="about-pre3">Combining resources, creativity, and business models, Create a new bureau of film and television in Taiwan.</div>
      <img class="about-post" :src="require('@/assets/img/about/post.jpg')" alt="post">
      <div class="about-desc">In 2021, he will invest in the production of "Youth Killing Love" directed by He Weiting, Won the Golden Horse Award and was shortlisted for five awards.</div>
      <div class="about-title">OUR TEAM</div>
      <div class="about-intro">
        <div class="about-team-box" 
          v-for="(team, index) in teamList"
          :key="index"
          @click="selectPerson(index)"
        >
          <img class="about-person" v-lazy="team.person" alt="person">
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
      <div v-if="isPersonPopup"
        @click="isPersonPopup = false" 
        class="about-popup"
      >
        <div @click.stop class="about-popup-box">
          <img @click="isPersonPopup = false" class="about-popup-close" :src="require('@/assets/img/icon/close.png')" alt="close">
          <div class="about-popup-row">
            <img class="about-popup-person" :src="selectedPerson.person2" alt="post">
            <div>
              <div class="about-popup-title">{{ selectedPerson.name }}</div>
              <div class="about-popup-sub">{{ selectedPerson.title }}</div>
              <div class="about-popup-desc">{{ selectedPerson.desc }}</div>
              <div class="about-popup-awards">Awards</div>
              <div class="about-popup-award"
                v-for="(award, index) in selectedPerson.awards"
                :key="index">{{ award.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </boxWidth>
  </div>
</template>

<script>

import { teamList } from '@/assets/list/teamList'
import { partnerList } from '@/assets/list/partnerList'
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
    generalTitle: require('~/components/general-title.vue').default
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
    }
  },
  watch: {
    
  }
}
</script>

<style lang="scss" scoped>

.about {
  padding-bottom: 60px;

  &-pre1 {
    margin-top: 32px;
    font-size: 48px;
    line-height: 1.2;
  }

  &-pre2 {
    display: flex;
    justify-content: space-between;
    margin-top: 48px;
    font-size: 48px;
    font-weight: 900;
  }

  &-pre3 {
    width: 523px;
    margin-top: 60px;
    line-height: 1.3;
  }

  &-post {
    width: 100%;
    margin-top: 90px;
  }

  &-desc {
    width: 650px;
    margin: 68px auto 0px;
    text-align: center;
    line-height: 1.5;
  }

  &-title {
    margin-top: 140px;
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
      opacity: 0.8;
    }
  }

  &-person {
    width: 260px;
  }

  &-name {
    transform: translateY(-24px);
    font-size: 32px;
  }

  &-name-title {
    transform: translateY(-16px);
    opacity: 0.5;
  }

  &-partner-title {
    margin-top: 60px;
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


</style>