<template>
    <div id='about' class='container-about'>
        <div class='container'>
            <div class='row' style='display:none;'>
                <div class='col-6 container-lang'>
                    <font-awesome-icon class='icon' :icon="iAppStore"></font-awesome-icon>
                    <p>
                        iOS Applications with Objective C
                    </p>
                </div>
                <div class='col-6 container-lang'>
                    <font-awesome-icon class='icon' :icon="iJavascriptSquare"></font-awesome-icon>
                    <p>
                        Front-End development with recent libs.
                    </p>
                </div>

                <div class='col-6 container-lang'>
                    <font-awesome-icon class='icon' :icon="iGitSquare"></font-awesome-icon>
                    <p>
                        Cooperation with git and subversion.
                    </p>
                </div>

                <div class='col-6 container-lang'>
                    <font-awesome-icon class='icon' :icon="iServer"></font-awesome-icon>
                    <p>
                        Back-end Development, ASP.NET
                    </p>
                </div>
            </div>
            <h1>
                Hi! <br/> I'm <vue-typer    :text='["Yoo.","Web Developer.","iOS Developer.", "College Student."]'
                                            :repeat='Infinity'
                                            :shuffle='false'
                                            initial-action='typing'
                                            :pre-type-delay='70'
                                            :type-delay='70'
                                            :pre-erase-delay='3000'
                                            :erase-delay='50'
                                            erase-style='backspace'
                                            :erase-on-complete='false'
                                            caret-animation='smooth'
                                            ></vue-typer>
            </h1>
            <p>
                소프트웨어 개발자입니다. 한국의 경기도 남양주시에 거주 중이고, 현재 삼육대학교 컴퓨터 공학과에 재학중입니다. 아이폰을 중심으로한 모바일 프로그래밍과 웹 프로그래밍 전반에 관심을 갖고있습니다. 산업근무요원을 거쳐 두 곳에서 3년 남짓 직장 생활을 이어오다 다시 학생으로 돌아왔습니다. 최근엔 swift와 VueJS, React 등의 최신 웹 프론트엔드 라이브러리들에 관심이 많아 공부 중입니다.
            </p>
        </div>
    </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faCoffee, faDatabase, faServer } from '@fortawesome/fontawesome-free-solid';
import { faAppStoreIos, faJsSquare, faJs, faGitSquare } from '@fortawesome/fontawesome-free-brands';
import { VueTyper } from 'vue-typer';

export default {
    name : "ContentAbout",
    props: [],
    data() {
        return {

        }
    },
    components: {
        FontAwesomeIcon, VueTyper
    },
    computed: {
        iCoffee(){
            return faCoffee;
        },
        iAppStore(){
            return faAppStoreIos;
        },
        iJavascript(){
            return faJs;
        },
        iJavascriptSquare(){
            return faJsSquare;
        },
        iDatabase(){
            return faDatabase;
        },
        iServer(){
            return faServer;
        },
        iGitSquare(){
            return faGitSquare;
        }
    }
}
</script>

<style scoped>
    /* .container-about{
        height: 100%;
        width: 100%;
        background-color: #00bcbe;
    }
    .container-about .container{
        padding: 1em;
    }
    
    .container-about .container h1{
        color: #fff;
        font-size:5.5em;
        text-align:right;
        margin-top : .5em;
        font-weight:800;
    }

    .container-about .container p{
        color: #fff;
        font-size:1.3em;
        text-align:left;
    }

    .container-about .container-lang {
        color: #fff;
        padding: 1.5em;
    }

    .container-about .container-lang p {
        font-size:1em;
        text-align:center;
        font-weight:800;
        margin : 1em 0px;
    }

    .container-about .container-lang .icon{
        font-size: 5.0em;
    } */
</style>
<style lang='scss'>
    $breakpoints: (
        'small': (min-width:500px),
        'medium': (min-width: 990px),
        'large': (min-width: 1000px),
        'huge': (min-width: 1200px),
    );
    /// 반응형 매니저
    /// @access public
    /// @param {String} $breakpoint - 브레이크포인트
    /// @requires $breakpoints
    @mixin respond-to($breakpoint) {
    $raw-query: map-get($breakpoints, $breakpoint);

    @if $raw-query {
        $query: if(
        type-of($raw-query) == 'string',
        unquote($raw-query),
        inspect($raw-query)
        );

        @media #{$query} {
        @content;
        }
    } @else {
        @error 'No value found for `#{$breakpoint}`. '
            + 'Please make sure it is defined in `$breakpoints` map.';
    }
    }

    .container-about{
        height: 100%;
        width: 100%;
        background-color: #00bcbe;
     
        .container{
            padding: 1em;

            h1 {
                color: #fff;
                font-size:2em;
                text-align:right;
                margin-top : .5em;
                font-weight:800;
                @include respond-to('small'){
                    font-size:4em;
                }
                @include respond-to('medium'){
                    font-size: 5.5em;
                }
            }
            p {
                color: #fff;
                text-align:left;
                font-size:1em;
                @include respond-to('small'){
                    font-size:1.3em;
                }
            }
        }

        .container-lang {
            color: #fff;
            padding: 1.5em;

            p {
                font-size:1em;
                text-align:center;
                font-weight:800;
                margin : 1em 0px;
            }
            .icon{
                font-size: 5.0em;
            } 
        }
    }

    .vue-typer{
        .custom.char{   
            &.typed{
                color:#fff;
            }
        }
        .custom.caret{
            background-color:#fff;
            width:3px;
        }
    }
</style>