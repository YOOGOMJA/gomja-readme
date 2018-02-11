<template>
    <div id='about' class='container-about'>
        <div class='container'>
            <h1>
                Hi! <br/> I'm Yoo.
            </h1>
            <p>
                a Software Developer. 
                <font-awesome-icon :icon="iAppStore"></font-awesome-icon>
                <font-awesome-icon :icon="iJavascriptSquare"></font-awesome-icon>
            </p>
        </div>
    </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid';
import { faAppStoreIos, faJsSquare, faJs } from '@fortawesome/fontawesome-free-brands';

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
        }
    }
}
</script>

<style scoped>
    .container-about{
        height: 100%;
        width: 100%;
        background-color: #6c7a89;
    }

    .container-about .container{
        padding: 4em 9em;
    }
    
    .container-about .container h1{
        color: #eee;
        font-size:5.5em;
        text-align:left;
    }

    .container-about .container p{
        color: #eee;
        font-size:1.5em;
        text-align:left;
    }

</style>