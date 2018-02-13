<template>
    <footer>
        <div class='container'>
            <div class='row'>
                <div class='col-4'>
                </div>
                <div class='col-8'></div>
                
            </div>
            <p class='powered'>all right reserved by yoogomja</p>
            <p class='powered'>powered by vue.js , aws</p>
        </div>
    </footer>
</template>

<script>
export default {
    name:'footer',
    computed:{

    },
    component:{

    }
}
</script>

<style>
    footer{
        background-color:#212529;
        color:white;
    }

    footer .powered{
        font-size:.7em;
        color:#a0a0a0;
        margin:0;
    }
</style>
