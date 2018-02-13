import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      links: [ 
        { title : 'intro'    , isActive : true , link: '#intro' },
        { title : 'about'    , isActive : false , link: '#about' },
        { title : 'skill' , isActive : false , link : '#skill' },
        { title : 'project'  , isActive : false , link : '#project' },
        { title : 'career'   , isActive : false , link : '#career' },
        { title : 'contact'  , isActive : false , link : '#contact' }
      ]
    },
    mutations: {
      activate(state, payload){
        state.links.forEach(e=>{
            if(e.title === payload.title) { e.isActive = true; }
            else{ e.isActive = false; }
        });
      }
    }
  })
  