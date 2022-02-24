<template>
  <div class="loading loading-animate1">
    <div class="loading-box">
      <div class="loading-animate2">RISING FILMS</div>
      <div class="loading-animate3">Imagination on the Rise.</div>
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
      switchPage: false
    }
  },
  computed: {

  },
  methods: {
    
  },
  watch: {
    '$route.name': {
      handler: function() {
        
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss">

.loading {
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: calc(100%);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #171719;
  text-align: center;
  z-index: 5;

  &-box {

    & div:first-child {
      font-size: 24px;
      font-weight: 900;
      opacity: 0;
    }

    & div:last-child {
      font-size: 18px;
      margin-top: 8px;
      opacity: 0;
    }
  }
}

.loading-animate1 {
  animation-name: blackBg;
  animation-duration: 3s;
  animation-delay: 0s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

@keyframes blackBg {
  0%   { opacity: 1; height: 0vh; }
  15%  { opacity: 1; height: 100vh; }
  50%  { opacity: 1; height: 100vh; top: 0px; }
  85%  { opacity: 1; height: 100vh; }
  100% { opacity: 1; height: 0px; top: 0px; visibility: hidden; }
}

.loading-animate2 {
  animation-name: textAnimate1;
  animation-duration: 1.5s;
  animation-delay: 0.5s;
  animation-fill-mode: ease-in-out;
}

@keyframes textAnimate1 {
  0%   { opacity: 0; transform: translateY(10px); }
  33%  { opacity: 1; transform: translateY(0px); }
  66%  { opacity: 1; transform: translateY(0px); }
  99% { opacity: 0; transform: translateY(-10px); }
}

.loading-animate3 {
  animation-name: textAnimate2;
  animation-duration: 1.5s;
  animation-delay: 0.7s;
  animation-fill-mode: ease-in-out;
}

@keyframes textAnimate2 {
  0%   { opacity: 0; transform: translateY(10px); }
  33%  { opacity: 1; transform: translateY(0px); }
  66%  { opacity: 1; transform: translateY(0px); }
  99% { opacity: 0; transform: translateY(-10px); }
}



@media( max-width: 1023px ){




}


</style>