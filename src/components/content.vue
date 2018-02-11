<template>
    <div>
        <content-about></content-about>
    </div>
</template>

<script>
import ContentAbout from './about/about';

export default {
    name : 'Content',
    props : [],
    data () {
        return {

        }
    },
    components: { ContentAbout, }
}
</script>

