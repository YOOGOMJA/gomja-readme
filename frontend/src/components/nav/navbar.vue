<template>
    <div class="header-content">
        <nav class="navbar navbar-expand-lg navbar-dark">
            <a class="navbar-brand" href="">{{title}}</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <nav-item
                        v-for="item in this.$store.state.links"
                        :key="item.id"
                        :item-info="item"
                    >
                    </nav-item>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import NavItem from './navbar-item';

export default {
    name : 'NavBar',
    props : ['title'],
    data() {
        return {
            links: []
        }
    },
    components : {
        NavItem,
    }
}
</script>

<style scoped>
    .header-content{
        background: rgba(0, 0, 0, 0);
        position: relative;
        transition: all 0.2s linear;
        top:0;
        padding: 0;
        z-index:0;
    }
    .header-content.fixed {
        background: #050505;
        position: fixed;
        width:100%;
        left:0;
        /*padding: 10px 0;*/
        z-index: 1000;
    }
</style>