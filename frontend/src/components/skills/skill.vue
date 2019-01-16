<template>
    <div id='skill' >
        <div class='container'>
            <div class='row'>
                <div class='col-12'>
                    <div class='header'>
                        <h1>
                            Technical skills
                        </h1>
                        <p>이런 것들은 좀 다룰줄 압니다</p>
                        <hr/>
                    </div>
                </div>
            </div>
            <div class='row'>
                <!-- SKILL ROW 1 -->
                <div class='col'
                        v-for="item in skills_row1"
                        :key="item.id">
                    <skill-item
                        :info="item">
                    </skill-item>
                </div>
            </div>
            <div class='row'>
                <!-- SKILL ROW 2 -->
                <div class='col'
                        v-for="item in skills_row2"
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
                        <p>그리고 이런 것들에 대해 몇마디 거들 수 있어요</p>
                        <hr/>
                    </div>
                </div>
            </div>
            
            <div class='additional'>
                <span title='Git'><font-awesome-icon class='icon' :icon='iGit'></font-awesome-icon></span>
                <span title='ReactJS'><font-awesome-icon class='icon' :icon='iReact'></font-awesome-icon></span>
                <span title='VueJS'><font-awesome-icon class='icon' :icon='iVue'></font-awesome-icon></span>
                <span title='AmazonWebService'><font-awesome-icon class='icon' :icon='iAWS'></font-awesome-icon></span>
                <span title='HTML5'><font-awesome-icon class='icon' :icon='iHtml5'></font-awesome-icon></span>
                <span title='nodeJS'><font-awesome-icon class='icon' :icon='iNode'></font-awesome-icon></span>
                <span title='Sass'><font-awesome-icon class='icon' :icon='iSass'></font-awesome-icon></span>
                <span title='npm'><font-awesome-icon class='icon' :icon='iNPM'></font-awesome-icon></span>
                <span title='font-awesome'><font-awesome-icon class='icon' :icon='iFontAwesome'></font-awesome-icon></span>
            </div>
        </div>
    </div>
</template>


<script>
import SkillItem from './skill-item';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGitSquare, faVuejs, faNodeJs, faReact, faHtml5, faSass, faGit, faAngular, faAws, faFontAwesomeFlag, faNpm} from '@fortawesome/fontawesome-free-brands';
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
                    lvl:80,
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
                    lvl:80,
                    logo:'',
                    cate:'mobile'
                }
            ],
            skills_row1:[
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
                    lvl:80,
                    logo:'',
                    cate : 'front'
                },
            ],
            skills_row2:[
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
                    lvl:80,
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
        },
        iFontAwesome(){
            return faFontAwesomeFlag;
        },
        iNPM(){
            return faNpm;
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
