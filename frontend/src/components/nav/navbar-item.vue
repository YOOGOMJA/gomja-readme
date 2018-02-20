<template>
    <li class="nav-item" :class="[ItemInfo.isActive ? 'active' : '']">
        <a class="nav-link" :href="ItemInfo.link" @click.prevent="scroll">
            {{ItemInfo.title}}
        </a>
    </li>

    <!--
    <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Something else here</a>
        </div>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
    </li>
    -->
</template>


<script>
export default {
    name : 'NavBarItem',
    props : ['ItemInfo'],
    data(){
        console.log(this.$store)
        return {
            
        }
    },
    methods : {
        scroll(e) {
            history.pushState({} , this.ItemInfo.name , this.ItemInfo.link);
            $("html, body").animate({ scrollTop: $(this.ItemInfo.link).offset().top }, 400);
            this.$store.commit('activate', { title : this.ItemInfo.title });
        }
    }
}
</script>
<style>
    a {
        margin-left : 20px;
    }
    .active {
        font-weight : 600;
    }
</style>
