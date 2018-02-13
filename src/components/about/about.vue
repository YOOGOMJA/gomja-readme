<template>
    <div id='about' class='container-about'>
        <div class='container'>
            <div class='row'>
                <div class='col-6 container-lang'>
                    <font-awesome-icon class='icon' :icon="iAppStore"></font-awesome-icon>
                    <p>
                        iOS Applications with Objective C
                    </p>
                </div>
                <div class='col-6 container-lang'>
                    <font-awesome-icon class='icon' :icon="iJavascriptSquare"></font-awesome-icon>
                    <p>
                        Front-End development with recent libs.
                    </p>
                </div>

                <div class='col-6 container-lang'>
                    <font-awesome-icon class='icon' :icon="iGitSquare"></font-awesome-icon>
                    <p>
                        Cooperation with git and subversion.
                    </p>
                </div>

                <div class='col-6 container-lang'>
                    <font-awesome-icon class='icon' :icon="iServer"></font-awesome-icon>
                    <p>
                        Back-end Development, ASP.NET
                    </p>
                </div>
            </div>
            <h1>
                Hi! <br/> I'm Yoo.
            </h1>
            <p>
                a Software Developer, Colleage Student.  
            </p>
        </div>
    </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faCoffee, faDatabase, faServer } from '@fortawesome/fontawesome-free-solid';
import { faAppStoreIos, faJsSquare, faJs, faGitSquare } from '@fortawesome/fontawesome-free-brands';

export default {
    name : "ContentAbout",
    props: [],
    data() {
        return {

        }
    },
    components: {
        FontAwesomeIcon,
    },
    computed: {
        iCoffee(){
            return faCoffee;
        },
        iAppStore(){
            return faAppStoreIos;
        },
        iJavascript(){
            return faJs;
        },
        iJavascriptSquare(){
            return faJsSquare;
        },
        iDatabase(){
            return faDatabase;
        },
        iServer(){
            return faServer;
        },
        iGitSquare(){
            return faGitSquare;
        }
    }
}
</script>

<style scoped>
    .container-about{
        height: 100%;
        width: 100%;
        background-color: #e09525;
    }

    .container-about .container{
        padding: 4em 9em;
    }
    
    .container-about .container h1{
        color: #fff;
        font-size:4.5em;
        text-align:right;
        margin-top : .5em;
        font-weight:800;
    }

    .container-about .container p{
        color: #fff;
        font-size:1.3em;
        text-align:left;
    }

    .container-about .container-lang {
        color: #fff;
        padding: 1.5em;
    }

    .container-about .container-lang p {
        font-size:1em;
        text-align:center;
        font-weight:800;
        margin : 1em 0px;
    }

    .container-about .container-lang .icon{
        font-size: 5.0em;
    }

</style>