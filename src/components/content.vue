<template>
    <div>
        <content-about></content-about>
        <content-skill></content-skill>
        <content-project></content-project>
    </div>
</template>

<script>
import ContentAbout from './about/about';
import ContentSkill from './skills/skill';
import ContentProject from './project/project';

export default {
    name : 'Content',
    props : [],
    data () {
        return {

        }
    },
    components: { ContentAbout, ContentSkill , ContentProject }
}
</script>

