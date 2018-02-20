<template>
  <li :class='{ "timeline-inverted" : isInverted }'>
      <div class='timeline-badge' :class='badgeColor'>
          <span title=''>
              <font-awesome-icon :icon='badgeIcon'></font-awesome-icon>
          </span>
        </div>
        <div class='timeline-panel'>
            <div class='timeline-heading'>
                <h4 class='timeline-title'>
                    {{eventTitle}}
                </h4>
                <!-- 시간 경과가 필요한 경우  -->
                <p>
                    <small class='text-muted'>
                        <font-awesome-icon :icon="iClock"></font-awesome-icon>
                        {{sDateFromCurrent}}
                    </small>
                </p>
            </div>
            <div class='timeline-body'>
                <p>
                    {{eventContent}}
                </p>
            </div>
        </div>
  </li>    
</template>

<script>
import Moment from 'moment';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { faClock, faGraduationCap } from '@fortawesome/fontawesome-free-solid';


export default {
    name:'TimelineItem',
    props :[ 'isInverted' , 'badgeColor' , 'badgeIcon' , 'eventTitle' , 'eventContent', 'eventDate' ],
    data(){
        return {

        }
    },
    computed: {
        iClock(){
            return faClock;
        },
        sDateFromCurrent(){
            let _m = new Moment(this.eventDate);

            let _t = _m.format('YYYY.MM') + ', ' + _m.fromNow();

            return _t;
        }
    },
    components:{ FontAwesomeIcon }
}
</script>

<style>

</style>
