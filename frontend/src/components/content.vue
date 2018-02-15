<template>
    <div>
        <content-about></content-about>
        <content-skill></content-skill>
        <content-project></content-project>
        <content-career></content-career>
        <content-contact></content-contact>
    </div>
</template>

<script>
import ContentAbout from './about/about';
import ContentSkill from './skills/skill';
import ContentProject from './project/project';
import ContentCareer from './career/career';
import ContentContact from './contact/contact';
export default {
    name : 'Content',
    props : [],
    data () {
        return {

        }
    },
    components: { 
        ContentAbout, 
        ContentSkill , 
        ContentProject, 
        ContentCareer, 
        ContentContact 
    }
}
</script>

