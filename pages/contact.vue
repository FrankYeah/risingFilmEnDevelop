<template>
  <div class="contact">
    <div class="contact-row-inner">
      <div class="contact-line"></div>
      <div class="contact-head">Contact</div>
    </div>
    <form @submit.prevent="handleSubmit()"
      method="POST"
      action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSf6FRXZuWT0Y1KeI1TVgUcbrCeRgTpCrkNPFwKsjAnveCYxZg/formResponse"
      target="_blank"
      class="contact-form"
    >
      <input :class="['contact-input', {'contact-nofill': !isForm.name}]" v-model="name" @focus="focusInput('name')" type="text" placeholder="Name">
      <input :class="['contact-input', {'contact-nofill': !isForm.phone}]" v-model="phone" @focus="focusInput('phone')" type="text" placeholder="Phone">
      <input :class="['contact-input', {'contact-nofill': !isForm.mail}]" v-model="mail" @focus="focusInput('mail')" type="text" placeholder="E-Mail">
      <div :class="['contact-select', {'contact-nofill': !isForm.service}]">
        <el-select v-model="service" @focus="focusInput('service')" placeholder="Select service">
          <el-option
            v-for="item in serviceOptions"
            :key="item.value"
            :label="item.value"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <textarea :class="['contact-input contact-textarea', {'contact-nofill': !isForm.message}]" @focus="focusInput('message')" v-model="message" placeholder="Message"></textarea>
      <div class="contact-btn-box">
        <div class="contact-error-text">
          <span v-if="!isPass">Please Fill Required field above</span>
        </div>
        <button class="contact-btn">Submit</button>
      </div>
    </form>
        
    <div v-if="isShowPopup" @click="closePopup" class="contact-popup">
      <div @click.stop class="contact-popup-box">
        <img class="contact-popup-img" v-lazy="require('@/assets/img/icon/success.png')" alt="success">
        <div class="contact-popup-title">Success</div>
        <div class="contact-popup-desc">The form has been sent successfully, someone will contact you later</div>
        <button @click="closePopup" class="contact-popup-btn">Confirm</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // head: {
  //   title: 'RISING FILMS',
  //   meta: [
  //     { name: 'keywords', content: 'RISING FILMS'},
  //   ]
  // },
  layout: 'default',
  components: {

  },
  props: {
    
  },
  data () {
    return {
      name: '',
      phone: '',
      mail: '',
      service: '',
      serviceOptions: [
        { value: 'Development' },
        { value: 'Production' },
        { value: 'Virtual Production' },
        { value: 'Others' }
      ],
      // 英文：Development、Production、Virtual Production、Others
      // 中文：開發、製作、虛擬製作、其他合作
      message: '',
      isForm: {
        name: true,
        phone: true,
        mail: true,
        service: true,
        message: true
      },
      isPass: true,
      isShowPopup: false
    }
  },
  computed: {

  },
  methods: {
    focusInput (focus) {
      if (focus == 'name') {
        this.isForm.name = true
      } else if (focus == 'phone') {
        this.isForm.phone = true
      }  else if (focus == 'mail') {
        this.isForm.mail = true
      } else if (focus == 'service') {
        this.isForm.service = true
      }  else if (focus == 'message') {
        this.isForm.message = true
      }
    },
    handleSubmit() {
      if (!this.name) {
        this.isForm.name = false
      }
      if (!this.phone) {
        this.isForm.phone = false
      }
      if (!this.mail) {
        this.isForm.mail = false
      }
      if (!this.service) {
        this.isForm.service = false
      }
      if (!this.message) {
        this.isForm.message = false
      }
      if(!this.name || !this.phone || !this.mail || !this.service || !this.message) {
        this.isPass = false
        return
      }

      const formUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSf6FRXZuWT0Y1KeI1TVgUcbrCeRgTpCrkNPFwKsjAnveCYxZg/formResponse'
      const queryString = require('query-string')
      const q = queryString.stringifyUrl({
        url: formUrl,
        query: {
          'entry.943479078': this.name,
          'entry.851500943': this.phone,
          'entry.1010778510': this.mail,
          'entry.1848715513': this.service,
          'entry.2049837030': this.message
        }
      })
      this.$axios.post(q)
      .then(response => {

      })
      .catch(error => {

      })

      this.isPass = true
      this.isShowPopup = true

    },
    closePopup() {
      this.isShowPopup = false
      this.name = ''
      this.phone = ''
      this.mail = ''
      this.service = ''
      this.message = ''
    }
  },
  watch: {
    
  }
}
</script>

<style lang="scss" scoped>

.contact {
  position: relative;
  width: 100%;
  padding-top: 150px;
  display: flex;
  align-items: center;

  &-row-inner {
    display: flex;
    align-items: center;
    width: 50vw;
  }

  &-line {
    width: calc(50vw - 421px);
    height: 1px;
    background-color: #818181;
  }

  &-head {
    margin: 0px 60px 0px 30px;
    font-size: 90px;
  }

  &-form {
    display: flex;
    flex-direction: column;
    width: 400px;
  }

  &-input {
    border: 2px solid transparent;
    margin-bottom: 24px;
    padding: 10px 0px 10px 15px;
    background-color: #29292A;
    font-size: 18px;
    color: white;

    &::placeholder {
      color: #FFFFFF;
      font-style: italic;
      opacity: 0.5;
    }
  }

  &-select {
    border: 2px solid transparent;
  }

  &-textarea {
    border: 2px solid transparent;
    margin-top: 24px;
    height: 100px;
    font-size: 18px;

    &::placeholder {
      color: #FFFFFF;
      font-style: italic;
      opacity: 0.5;
    }
  }

  &-nofill {
    border: 2px solid rgba(255, 95, 95, 0.5);
  }

  &-btn-box {
    display: flex;
    justify-content: space-between;
  }

  &-error-text {
    font-size: 14px;
    color: #FF5F5F;
  }

  &-btn {
    width: 200px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #FFFFFF;
    background-color: transparent;
    color: white;
    font-size: 24px;
    transition: all 0.4s;
    transition-timing-function: ease-in-out;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  &-popup {
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
      margin: 0px 27px;
      padding: 60px 32px 48px;
      background-color: #29292A;
    }

    &-img {
      width: 120px;
    }

    &-title {
      margin-top: 40px;
      font-size: 24px;
    }

    &-desc {
      max-width: 280px;
      margin-top: 8px;
      font-size: 14px;
      text-align: center;
      opacity: 0.5;
    }

    &-btn {
      width: 200px;
      margin-top: 48px;
      padding: 11px 0px;
      border: 1px solid #FFFFFF;
      text-align: center;
      background-color: transparent;
      color: white;
      font-size: 24px;
      transition: all 0.4s;
      transition-timing-function: ease-in-out;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }
  
}

@media( max-width: 1023px ){

.contact {
  flex-direction: column;
  padding-top: 0px;
  margin: 118px 0px;

  &-row-inner {
    width: 100%;
    margin-bottom: 67px;
  }

  &-line {
    width: calc(50vw - 100px);
  }

  &-head {
    margin: 0px 0px 0px 17px;
    font-size: 48px;
  }

  &-form {
    max-width: 330px;
    width: 90%;
    margin: 0px auto;
    padding: 0px;
  }

  &-input {
    

    &::placeholder {
      opacity: 0.5;
    }
  }

  &-select {
    
  }

  &-textarea {
    height: 180px;
    margin-bottom: 46px;

    &::placeholder {
      opacity: 0.5;
    }
  }

  &-nofill {
    
  }

  &-btn-box {
    position: relative;
    flex-direction: column;
  }

  &-error-text {
    position: absolute;
    top: -30px;
  }

  &-btn {
    width: 100%;
    margin-bottom: 54px;
  }

  &-popup {
    

    &-box {
      
    }

    &-img {
      
    }

    &-title {
      
    }

    &-desc {
      
    }

    &-btn {
      
    }
  }
  
}

}


</style>

<style lang="scss">

  .contact-select .el-select {
    width: 100%;
  }

  .contact-select .el-select .el-input__inner {
    padding: 10px 0px 10px 15px;
    border: 0px solid;
    background-color: #29292A;
    color: white;
    font-size: 18px;
    opacity: 1;
  }

  .contact-select .el-select .el-input__inner::placeholder {
    font-style: italic;
    color: white;
    opacity: 0.5;
  }

  .el-popper .popper__arrow::after {
    border-bottom-color: #404040!important;
  }

  .el-popper .popper__arrow {
    border-bottom-color: #404040!important;
  }

  .el-select-dropdown {
    border: 1px solid #404040;
    background-color: #404040!important;
  }

  .el-select-dropdown__list {
    background-color: #404040!important;
  }

  .el-select-dropdown__item {
    font-style: italic;
    color: white;
    font-size: 18px;
    background-color: #404040!important;
  }

  .el-select-dropdown__item:hover {
    background-color: #323232!important;
  }

  .el-select-dropdown__item.selected {
    background-color: #323232!important;
    color: white;
    font-weight: 300;
  }

@media( max-width: 1023px ){

.contact-select .el-select {
  
  }

  .contact-select .el-select .el-input__inner {
    
  }

  .contact-select .el-select .el-input__inner::placeholder {
    
  }

  .el-popper .popper__arrow::after {
    
  }

  .el-popper .popper__arrow {
    
  }

  .el-select-dropdown {
    
  }

  .el-select-dropdown__list {
    
  }

  .el-select-dropdown__item {
    
  }

  .el-select-dropdown__item:hover {
    
  }

  .el-select-dropdown__item.selected {
    
  }

}

</style>