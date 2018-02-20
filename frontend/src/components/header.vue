<template>
    <section id="intro" class="banner" role="banner"
            :class="{ 'banner-fixed': isScrolledOverThreshold }">
        <div class="covered">
        </div>
        <header>
            <nav-bar
                :class="{ 'fixed': isScrolledOverThreshold }"
                :title="title" />
        </header>
        <div class="container">
            <div class="col-md-10 col-md-offset-1 m-auto">
                <div class="banner-text text-center">
                    <h1>Gomja.readme</h1>
                    <p>Web / Mobile Application Developer</p>
                </div> 
            </div>
        </div>
    </section>
</template>

<script>
import NavBar from './nav/navbar';

export default {
    //props : ['title' , 'links', 'isScrolledOverThreshold'],
    props: {
        title: {
            type: String,
            required: true,
            default: 'Gomja.readme'
        },
        isScrolledOverThreshold: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    name : 'SiteHeader',
    data() {
        return {
            
        }
    },
    components: {
        NavBar,
    },
    watch: {
        isScrolledOverThreshold(){
            //console.log('changed : ' , this.isScrolledOverThreshold);
        }
    }
}
</script>

<style scoped>    
    .banner {
        background-image: url('../assets/intro_large.jpeg');
        background-position: center top;
        background-repeat: no-repeat;
        -moz-background-size: cover;
        -o-background-size: cover;
        -webkit-background-size: cover;
        background-size: cover;
        min-height: 600px;
    }

    .banner .covered{
        background-color: rgba(0,0,0,0.6);
        width: 100%;
        height:100%;
        max-height:600px;
        position:absolute;
        top:0;
        left:0;

    }
    .banner-btn {
        opacity: 0.5;
    }
    .banner-text {
        padding-top: 33%;
    }
    .banner-text h1 {
        color: #fff;
        font-family: "Source Sans Pro";
        font-size: 53px;
        letter-spacing: 20px;
        font-weight: 700;
        text-transform: uppercase;
        word-break:break-all;
    }
    .banner-text p {
        color: #8d8d8d;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 3px;
        line-height: 24px;
        text-transform: uppercase;
        margin:0px;
    }
    
    .banner.banner-fixed{
        padding-top : 56px;
    }

</style>
