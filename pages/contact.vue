<template>
  <div class="contact">
    <div class="contact-row">
      <div class="contact-row-inner">
        <div class="contact-line"></div>
        <div class="contact-head">Contact</div>
      </div>
      <form @submit.prevent="handleSubmit()"
        class="contact-form"
      >
        <input class="contact-input" v-model="name" type="text" placeholder="Name">
        <input class="contact-input" v-model="phone" type="text" placeholder="Phone">
        <input class="contact-input" v-model="mail" type="text" placeholder="E-Mail">
        <textarea class="contact-input contact-textarea" v-model="message" placeholder="Message"></textarea>
        <div class="contact-btn-box">
          <button class="contact-btn">Submit</button>
        </div>
        
      </form>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'RISING FILMS',
    meta: [
      { name: 'keywords', content: 'RISING FILMS'},
    ]
  },
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
      message: ''
    }
  },
  computed: {

  },
  methods: {
    
  },
  watch: {
    
  }
}
</script>

<style lang="scss" scoped>

.contact {
  position: fixed;
  left: 0%;
  top: 50%;
  transform: translate(0%, -50%);
  text-align: center;

  &-row {
    display: flex;
    align-items: center;
  }

  &-row-inner {
    display: flex;
    align-items: center;
  }

  &-line {
    width: 200px;
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
    margin-bottom: 24px;
    padding: 10px 0px 10px 15px;
    border: 0px solid;
    background-color: #29292A;
    color: white;

    &::placeholder {
      color: #FFFFFF;
      font-style: italic;
    }
  }

  &-textarea {
    height: 100px;

    &::placeholder {
      color: #FFFFFF;
      font-style: italic;
    }
  }

  &-btn-box {
    text-align: right;
  }

  &-btn {
    width: 200px;
    text-align: center;
    padding: 15px 0px;
    border: 1px solid #FFFFFF;
    background-color: transparent;
    color: white;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
  
}


</style>