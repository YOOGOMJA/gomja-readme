<template>
  <div id="app">
  
    <header-vue
      :title="title"
      :isScrolledOverThreshold="config.evt.isScrolledOverThreshold"
    />
    <router-view/>
  </div>
</template>

<script>
import HeaderVue from './components/header';

export default {
  name: 'App',
  data() {
    return {
      config: {
        evt: {
          // navigatio의 클래스를 변경하기 위한 임계값 
          threshold_evaluating_scroll_top : 56,
          isScrolledOverThreshold : false
        }
      },
      title : 'Gomja.log',
    }
  },
  methods: {
    evt_scroll(e) {
      let current_scroll_top = jQuery(e.target).scrollTop();
      if(this.config.evt.isScrolledOverThreshold == true){
        // 보임 처리가 이미 되어 있는 상태일 경우 
        if(current_scroll_top == 0){ this.config.evt.isScrolledOverThreshold = false; }
      }
      else{
        // 보임 처리가 되어 있지 않은 걍우
        if(current_scroll_top > this.config.evt.threshold_evaluating_scroll_top){
          this.config.evt.isScrolledOverThreshold = true;
        }
      }
    }
  },
  components: {
    HeaderVue,
  },
  created() {
     let doc = window.document;
     let self = this;
     doc.addEventListener('scroll',self.evt_scroll); 
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
