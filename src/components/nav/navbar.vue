<template>
    <nav class="navbar  navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="#">{{title}}</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <nav-item
                    v-for="item in linkItems"
                    :key="item.id"
                    :item-info="item"
                >
                </nav-item>
            </ul>
        </div>
    </nav>
</template>

<script>
import NavItem from './navbar-item';

export default {
    name : 'NavBar',
    props : ['title', 'links'],
    data () {
        return {
            linkItems : this.links
        }
    },
    components : {
        NavItem,
    }
}
</script>