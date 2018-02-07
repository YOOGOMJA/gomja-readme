<template>
  <div id="app">
    <header-vue 
      :title="title"
      :links="links"
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
      title : 'Gomja.log',
      links : [
        { title : 'intro'    , isActive : false , link: '#intro' },
        { title : 'about'    , isActive : false , link: '#about' },
        { title : 'language' , isActive : false , link : '#language' },
        { title : 'project'  , isActive : false , link : '#project' },
        { title : 'career'   , isActive : false , link : '#career' },
        { title : 'contact'  , isActive : false , link : '#contact' }
      ]
    }
  },
  components: {
    HeaderVue,
  }
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
