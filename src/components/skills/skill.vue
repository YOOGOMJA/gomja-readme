<template>
    <div id='skill' >
        <div class='container'>
            <div class='row'>
                <div class='col-12'>
                    <div class='header'>
                        <h1>
                            Technical skills
                        </h1>
                        <p>I quite good at</p>
                        <hr/>
                    </div>
                </div>
            </div>
            <div class='row'>
                <div    class='col-4'
                        v-for="item in skills"
                        :key="item.id">
                    <skill-item 
                        :info="item">
                    </skill-item>
                </div>
            </div>
            <div class='row'>
                <div class='col-12'>
                    <br/>
                    <div class='header'>
                        <p>and I can say about</p>
                        <hr/>
                    </div>
                </div>
            </div>
            
            <div class='additional'>
                <font-awesome-icon class='icon' :icon='iGit'></font-awesome-icon>
                <font-awesome-icon class='icon' :icon='iReact'></font-awesome-icon>
                <font-awesome-icon class='icon' :icon='iVue'></font-awesome-icon>
                <font-awesome-icon class='icon' :icon='iAWS'></font-awesome-icon>
                <font-awesome-icon class='icon' :icon='iHtml5'></font-awesome-icon>
                <font-awesome-icon class='icon' :icon='iNode'></font-awesome-icon>
                <font-awesome-icon class='icon' :icon='iSass'></font-awesome-icon>
            </div>
        </div>
    </div>
</template>


<script>
import SkillItem from './skill-item';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { faGitSquare, faVuejs, faNodeJs, faReact, faHtml5, faSass, faGit, faAngular, faAws } from '@fortawesome/fontawesome-free-brands';
import { faDatabase } from '@fortawesome/fontawesome-free-solid';


export default {
    name : 'skill',
    data(){
        return {
            skills: [
                /* 
                { name : 'Javascript' , lvl : 60 , logo : '' },
                { name : 'AngularJS' , lvl : 70 , logo : '' },
                { name : 'ASP.NET' , lvl : 70 , logo : '' },
                { name : 'Objective C' , lvl : 50 , logo : '' }
                */
                {
                    name : 'Javascript',
                    lvl: 70,
                    logo : '' ,
                    cate : 'front'
                },
                {
                    name : 'jQuery',
                    lvl : 80,
                    logo : '',
                    cate : 'front'
                },
                {
                    name: 'AngularJS',
                    lvl:70,
                    logo:'',
                    cate : 'front'
                },
                {
                    name: 'ASP.NET',
                    lvl:70,
                    logo:'',
                    cate:'back',
                },
                {
                    name: 'MSSQL',
                    lvl:60,
                    logo:'back'
                },
                {
                    name: 'Objective C',
                    lvl:70,
                    logo:'',
                    cate:'mobile'
                }
            ]
        }
    },
    components:{
        SkillItem, FontAwesomeIcon
    },
    computed:{
        iGit(){
            return faGitSquare;
        },
        iVue(){
            return faVuejs;
        },
        iNode(){
            return faNodeJs;
        },
        iReact(){
            return faReact;
        },
        iAngular(){
            return faAngular;
        },
        iHtml5(){
            return faHtml5;
        },
        iSass(){
            return faSass;
        },
        iAWS(){
            return faAws;
        }
    }
}
</script>

<style scoped>
    #skill{
        background-color:#eeeeee;
        padding:2em;
    }
    #skill .header h1{
        color:#f6685c;
        font-weight:100;
    }
    
    .additional{
        font-size : 3.5em;
        
    }
</style>
