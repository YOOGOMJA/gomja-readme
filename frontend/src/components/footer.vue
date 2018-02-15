<template>
    <footer>
        <div class='footer'>
            <div class='container'>
                <div class='row'>
                    <div class='col-8 powered border-right'>
                        <div class='w-100 text-left mb-10'>
                            <h5 class='header text-left'>Powered by</h5>
                            <span class='libraries'
                                    v-for="item in tools"
                                    :key="item.id">
                                <a :href='item.link'>{{item.name}}</a>
                            </span>
                        </div>
                        <div class='w-100 text-left mb-10'>
                            <h5 class='header text-left'>Libraries I use</h5>
                            <span class='libraries'
                                    v-for="item in libraries"
                                    :key="item.id">
                                <a :href='item.link' target='_blank'>{{item.name}}</a>
                            </span>
                        </div>
                    </div>
                    <div class='col-4 powered'>      
                        <div class='sns text-left'>
                            <a href="https://www.facebook.com/kyeongsoo.yoo" target='_blank'><font-awesome-icon :icon="iFacebook"></font-awesome-icon></a>
                            <a href="https://www.instagram.com/gomja_/" tartget='_blank'><font-awesome-icon :icon="iInstagram"></font-awesome-icon></a>
                            <a href="https://yoogomja.tistory.com" target='_blank'><font-awesome-icon :icon="iBlog"></font-awesome-icon></a>
                            <a href="https://github.com/yoogomja/gomja-readme" target='_blank'><font-awesome-icon :icon="iGithub"></font-awesome-icon></a>
                            <a href="httpS://soundcloud.com/gomja_beats" target='_blank'><font-awesome-icon :icon="iSoundcloud"></font-awesome-icon></a>
                        </div>
                        <p >all right reserved by yoogomja, 2018</p>
                        <p >powered by Vue.js, EXPRESS</p>  
                    </div>
                </div>
            </div>    
        </div>
        
    </footer>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { faFacebook, faInstagram, faBlogger, faGithub, faSoundcloud } from '@fortawesome/fontawesome-free-brands';

export default {
    name:'FooterVue',
    data(){
        return{
            libraries:[
                { link : 'https://router.vuejs.org/kr/' , name : 'vue-router' },
                { link : 'https://cngu.github.io/vue-typer/' , name : 'vue-typer' },
                { link : 'https://github.com/FortAwesome/Font-Awesome' , name : 'vue-fontawesome' },
                { link : 'https://nodemailer.com/about/' , name : 'nodemailer'},                
            ],
            tools : [
                { link : 'https://vuejs.org/' , name : 'vue.js' },
                { link : 'https://nodejs.org/ko/' , name : 'nodejs'},
                { link : 'http://expressjs.com/ko/' , name : 'express' },
                { link : 'https://getbootstrap.com' , name : 'bootstrap'},
            ]
        }
    },
    computed:{
        iFacebook(){
            return faFacebook;
        },
        iInstagram(){
            return faInstagram;
        },
        iBlog(){
            return faBlogger;
        },
        iGithub(){
            return faGithub;
        },
        iSoundcloud(){
            return faSoundcloud;
        }
    },
    components:{
        FontAwesomeIcon
    }
}
</script>

<style lang='scss' scoped>
    .footer{
        background-color:#212529;
        padding: 30px 0 40px 0;
        
        .mb-10{ margin-bottom :10px; }
        .border-right{  
            border-right: 1px solid #a0a0a0!important;
        }
        .powered {
            .header{
                color: #a0a0a0;
                font-weight:400;
            }

            p{
                text-align: left;
                font-size:.7em;
                color:#a0a0a0;
                margin:0;
            }

            .sns{
                a:hover{ 
                    color:#a0a0a0;
                }
                a:active{
                    color:#a0a0a0;
                }
                a{ 
                    color:#a0a0a0;
                    margin: 0
                }
                color:#a0a0a0;
                font-size:2em;
            }

            .libraries{
                color:#a0a0a0;
                border: 1px solid #a0a0a0;
                border-radius:5px;
                padding:2px 5px;
                margin: 0 0 5px 5px;
                /*float:left;*/
                font-size: .7em;
                a:hover{
                    color:#a0a0a0;
                }
                a:active{
                    color:#a0a0a0;
                }
                a{
                    text-decoration: none;
                    margin:0;
                    color:#a0a0a0;
                }
            }
        }
    }

</style>
