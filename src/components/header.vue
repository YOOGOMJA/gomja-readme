<template>
    <section class="banner" role="banner">
        <div class="covered">
        </div>
        <header>
            <nav-bar  
                :title="title" 
                :links='links'/>

        </header>
        <div class="container">
            <div class="col-md-10 col-md-offset-1 m-auto">
                <div class="banner-text text-center">
                    <h1>Gomja.readme</h1>
                    <p>Web / Mobile Application Developer</p>
                    <nav role="navigation" class=""> <a href="#services" class="banner-btn"><img src="images/down-arrow.png" alt=""></a></nav>
                </div>
            <!-- banner text --> 
            </div>
        </div>
    </section>
</template>

<script>
import NavBar from './nav/navbar';

export default {
    props : ['title' , 'links'],
    name : 'SiteHeader',
    data() {
        return {}
    },
    components: {
        NavBar,
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
        margin-top: 10px;
        margin-bottom: 80px;
        text-transform: uppercase;
    }
</style>
