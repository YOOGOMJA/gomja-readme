<template>
    <div id='career'>
        <div  class="container">
            <div class="page-header">
                <h1 id="timeline">Career</h1>
                <p>이런 경험들을 겪어왔습니다</p>
                <hr/>
            </div>
            <timeline-vue></timeline-vue>
        </div>
    </div> 
</template>

<script>
import TimelineVue from './timeline';

export default {
    name :'career',
    data(){
        return {}
    },
    components:{
        TimelineVue
    }
}
</script>

<style lang='scss'>
#career{
    background-color:#eee;
    padding: 30px 0;
}
.page-header{
    h1 {
        color:#f6685c;
        font-weight:100;
    }
}
</style>
