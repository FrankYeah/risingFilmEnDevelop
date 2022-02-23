<template>
  <div class="index">
    <div class="index-head index-animate1">RISING FILMS</div>
    <div class="index-sub index-animate2">Imagination on the Rise.</div>
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

.index {
  position: fixed;
  left: 50%;
  top: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  text-align: center;

  &-head {
    font-size: 64px;
    font-weight: bold;
    letter-spacing: 0.1em;
  }

  &-sub {
    margin-top: 20px;
    font-size: 24px;
    opacity: 0.5;
  }
  
}

.index-animate1 {
  animation-name: indexAnimate1;
  animation-duration: 1s;
  animation-delay: 3s;
  animation-fill-mode: backwards;
  animation-timing-function: cubic-bezier(.94,-0.01,.08,1);
}

@keyframes indexAnimate1 {
  0%   { letter-spacing: 0px; opacity: 0; transform: translateY(10px); }
  33%  { opacity: 1; transform: translateY(0px); }
  50% {  }
  66%  {  opacity: 1; transform: translateY(0px); }
  80% { letter-spacing: 0px; }
  99% { letter-spacing: 0.1em; }
}

.index-animate2 {
  animation-name: indexAnimate2;
  animation-duration: 1s;
  animation-delay: 3.3s;
  animation-fill-mode: backwards;
  animation-timing-function: cubic-bezier(.94,-0.01,.08,1);
}

@keyframes indexAnimate2 {
  0%   { opacity: 0; transform: translateY(10px); }
  33%  { opacity: 0.5; transform: translateY(0px); }
  66%  { opacity: 0.5; transform: translateY(0px); }
  99% {  }
}



@media( max-width: 1023px ){

.index {
  width: 100%;

  &-head {
    font-size: 36px;
  }

  &-sub {
    margin-top: 10px;
    font-size: 18px;
  }
  
}

}


</style>