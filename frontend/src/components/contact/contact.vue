<template>
    <div id='contact'>
        <div class='container'>
            <div class="page-header">
                <h1 id="timeline">Contact</h1>
                <p>언제든지 연락주세요</p>
                <hr/>
            </div>
            <div class='row contact-forms'>
                <div class='input-group mb-3 col-12 col-md-6 col-lg-6 col-xl-6'>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Email</span>
                    </div>
                    <input  v-model='mail'
                            id='txtEmail' type='text' class='form-control' placeholder='이메일 주소를 적어주세요'
                            />
                </div>
                <div class='input-group mb-3 col-12 col-md-6 col-lg-6 col-xl-6'>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Phone</span>
                    </div>
                    <input  v-model='phone'
                            id='txtHP' type='tel' class='form-control' placeholder='전화번호를 적어주세요'/>
                </div>                
                <div class='input-group mb-3 col-12'>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Subject</span>
                    </div>
                    <input  v-model='subject'
                            id='txtSubject' type='text' class='form-control' placeholder='제목을 적어주세요'/>
                </div>
                <div class='mb-3 col-12'>
                    <textarea   v-model='content' 
                                id='txtContent' class='form-control' placeholder="내용을 적어주세요">
                    </textarea>
                </div>

                <div class='mb-3 col-12'>
                    <div    v-for="item in error"
                            :key="item.id"
                            class="alert alert-danger w-100" role="alert">
                            {{item.mesg}}
                    </div>
                    <button type='button' class='btn btn-lg btn-mint' @click='submitMail()'>보내기</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
axios.defaults.withCredentials = true;

export default {
    name: 'ContactVue',
    data(){
        return {
            mail : 'a@bc.com',
            phone : '010-1234-1234',
            subject : 'subject',
            content : 'content',
            // mail : '',
            // phone : '',
            // subject : '',
            // content : '',
            error : [],
            mailSendingRequested: false
        }
    },
    computed:{

    },
    components:{ },
    methods:{
        validate(){
            this.error.splice(0,this.error.length);

            // email validation 
            let reg_mail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            let reg_phone = /^\d{3}-\d{3,4}-\d{4}$/;
            let isPassed = true;            
            if(!reg_mail.test(this.mail)) { 
                this.error.push({
                    type : 'mail',
                    mesg : '이메일 형식이 올바르지 않습니다. 다시 확인해주세요'
                }) 
                isPassed = false;
            }
            if(!reg_phone.test(this.phone)){
                this.error.push({
                    type : 'phone',
                    mesg : '휴대전화 형식이 올바르지 않습니다. 다시 확인해주세요'
                })
                isPassed = false;
            }   
            if(this.subject == '' || this.subject.length >= 300){
                this.error.push({
                    type: 'subject',
                    mesg: '제목 형식이 올바르지 않습니다. 되도록 300자 이내로 입력해주세요'
                });
                isPassed = false;
            }
            if(this.content == '' || this.content.length >= 5000){
                this.error.push({
                    type: 'content',
                    mesg : '내용이 공백입니다. 되도록 5000자 이내로 작성해주세요'
                });
                isPassed = false;
            }

            return isPassed;
        },
        submitMail(){
            if(this.mailSendingRequested){
                alert('메일을 보내는 중입니다. 잠시만 기다려주세요');
            }
            else{
                if(this.validate()){
                    this.mailSendingRequested = true;
                    //this.$http.headers.common['Access-Control-Allow-Origin'] = '*';
                    console.log(this);
                    this.$http({
                        url : 'https://gomja-log-mailer.herokuapp.com/mailer/send',
                        method : 'post',
                        mode: 'no-cors',
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Content-Type': 'application/json',
                        },
                        withCredentials: true,
                        credentials: 'same-origin',
                        data : {
                            mail : this.mail,
                            phone : this.phone,
                            subject : this.subject,
                            content : this.content
                        }
                    })
                    .then(res => {
                        console.log(res);
                        if(res.status === 200){
                            alert('메일이 발송됐습니다! 감사합니다 👍');
                        }
                        else{
                            if(res.data){
                                alert('메일 발송이 실패했습니다..\n에러 : ['+ res.data.data.mesg +']');
                            }
                            else{
                                alert('일시적인 오류로 메일 발송이 실패했습니다. 잠시 후 다시 시도해주세요');
                            }
                        }
                        this.mailSendingRequested = false;
                    } , res => {
                        alert('일시적인 오류로 메일 발송이 실패했습니다. 잠시 후 다시 시도해주세요');
                        this.mailSendingRequested = false;
                    });
                }
            }
        }
    }
}
</script>

<style lang='scss'>
#contact{
    background-color:#fff;
    padding: 30px 0;
}
.page-header{
    h1 {
        color:#f6685c;
        font-weight:100;
    }
}

.contact-forms{
    background-color:rgba(0,0,0,0);

    textarea {
        min-height: 10em;
    }

    .btn-orange{
        background-color:#f6685c;
        color:#fff;
    }

    .btn-mint{
        background-color:#00bcbe;
        color:#fff;
    }
    button {
        width:100%;
    }
    .error{
        background-color:#f6685c;
        color:red;
    }
}
</style>