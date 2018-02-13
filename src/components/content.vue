<template>
    <div>
        <content-about></content-about>
        <content-skill></content-skill>
    </div>
</template>

<script>
import ContentAbout from './about/about';
import ContentSkill from './skills/skill';

export default {
    name : 'Content',
    props : [],
    data () {
        return {

        }
    },
    components: { ContentAbout, ContentSkill }
}
</script>

