<template>
    <ul class='timeline'>
        <timeline-item-vue  v-for="item in TimelineInfo"
                        :key="item.id"  
                        :eventTitle="item.title"
                        :eventContent="item.content"
                        :eventDate="item.date"
                        :badgeColor="item.badgeColor"
                        :badgeIcon="item.badgeIcon"
                        :isInverted="item.isInverted"                        
        ></timeline-item-vue>
    </ul>
</template>

<script>
import TimelineItemVue from './timeline-item';
import { faGraduationCap, faBuilding, faCode } from '@fortawesome/fontawesome-free-solid';

export default {
    name : "TimelineVue",
    components:{
        TimelineItemVue
    },
    computed:{
        TimelineInfo(){
            var items = [];

            items.push({
                title : '성결대학교 입학',
                content: '10학번으로 멀티미디어 공학부에 입학하였습니다',
                date: new Date('2010-03-01'),
                badgeColor: '',
                badgeIcon : faGraduationCap,
                isInverted: false
            });

            items.push({
                title : '(주)유씨알엠 입사',
                content: '사원으로 입사하여 주임으로 퇴직하였습니다.\n약 2년 9개월 가량 재직하였습니다',
                date: new Date('2013-11-01'),
                badgeColor: 'warning',
                badgeIcon : faBuilding,
                isInverted: true
            });

            items.push({
                title : '(주)와이드모바일 입사',
                content: '사원으로 입사후 약 6개월 가량 재직하였습니다',
                date: new Date('2017-04-01'),
                badgeColor: 'success',
                badgeIcon : faCode,
                isInverted: false
            });

            items.push({
                title : '삼육대학교 편입',
                content: '18년부로 컴퓨터 공학 16학번으로 편입하였습니다',
                date: new Date('2018-02-26'),
                badgeColor: 'primary',
                badgeIcon : faGraduationCap,
                isInverted: true
            });
            
            items.push({
                title : '교내 경진 대회 입상',
                content: '삼육대학교 교내 프로그램 개발 경진대회에서 3등으로 입상하였습니다',
                date: new Date('2018-11-21'),
                badgeColor: 'primary',
                badgeIcon : faCode,
                isInverted: false
            });

            return items;
        }
    }
}
</script>

<style lang='scss'>
 
.timeline {
    list-style: none;
    padding: 20px 0 20px;
    position: relative;   
}

.timeline:before {
    top: 0;
    bottom: 0;
    position: absolute;
    content: " ";
    width: 3px;
    background-color: #fff;
    left: 50%;
    margin-left: -1.5px;
}

.timeline > li {
    margin-bottom: 20px;
    position: relative;
}

.timeline > li:before,
.timeline > li:after {
    content: " ";
    display: table;
}

.timeline > li:after {
    clear: both;
}

.timeline > li:before,
.timeline > li:after {
    content: " ";
    display: table;
}

.timeline > li:after {
    clear: both;
}

.timeline > li > .timeline-panel {
    width: 46%;
    float: left;
    border: 1px solid #d4d4d4;
    border-radius: 2px;
    padding: 20px;
    position: relative;
    -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
    background-color:#fff;
}

    .timeline > li > .timeline-panel:before {
        position: absolute;
        top: 26px;
        right: -15px;
        display: inline-block;
        border-top: 15px solid transparent;
        border-left: 15px solid #ccc;
        border-right: 0 solid #ccc;
        border-bottom: 15px solid transparent;
        content: " ";
    }

    .timeline > li > .timeline-panel:after {
        position: absolute;
        top: 27px;
        right: -14px;
        display: inline-block;
        border-top: 14px solid transparent;
        border-left: 14px solid #fff;
        border-right: 0 solid #fff;
        border-bottom: 14px solid transparent;
        content: " ";
    }

.timeline > li > .timeline-badge {
    color: #fff;
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 1.4em;
    text-align: center;
    position: absolute;
    top: 16px;
    left: 50%;
    margin-left: -25px;
    background-color: #999999;
    z-index: 100;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
}

.timeline > li.timeline-inverted > .timeline-panel {
    float: right;
}

.timeline > li.timeline-inverted > .timeline-panel:before {
    border-left-width: 0;
    border-right-width: 15px;
    left: -15px;
    right: auto;
}

.timeline > li.timeline-inverted > .timeline-panel:after {
    border-left-width: 0;
    border-right-width: 14px;
    left: -14px;
    right: auto;
}

.timeline-badge.primary {
    background-color: #2e6da4 !important;
}

.timeline-badge.success {
    background-color: #3f903f !important;
}

.timeline-badge.warning {
    background-color: #f0ad4e !important;
}

.timeline-badge.danger {
    background-color: #d9534f !important;
}

.timeline-badge.info {
    background-color: #5bc0de !important;
}

.timeline-title {
    margin-top: 0;
    color: inherit;
}

.timeline-body > p,
.timeline-body > ul {
    margin-bottom: 0;
}

.timeline-body > p + p {
    margin-top: 5px;
}

@media (max-width: 767px) {
    ul.timeline:before {
        left: 40px;
    }

    ul.timeline > li > .timeline-panel {
        width: calc(100% - 90px);
        width: -moz-calc(100% - 90px);
        width: -webkit-calc(100% - 90px);
    }

    ul.timeline > li > .timeline-badge {
        left: 15px;
        margin-left: 0;
        top: 16px;
    }

    ul.timeline > li > .timeline-panel {
        float: right;
    }

        ul.timeline > li > .timeline-panel:before {
            border-left-width: 0;
            border-right-width: 15px;
            left: -15px;
            right: auto;
        }

        ul.timeline > li > .timeline-panel:after {
            border-left-width: 0;
            border-right-width: 14px;
            left: -14px;
            right: auto;
        }
}
</style>
