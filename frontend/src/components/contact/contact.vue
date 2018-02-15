<template>
    <div id='contact'>
        <div class='container'>
            <div class="page-header">
                <h1 id="timeline">Contact</h1>
                <p>언제든지 연락주세요</p>
                <hr/>
            </div>
            <div class='row contact-forms'>
                <div class='input-group mb-3 col-6'>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Email</span>
                    </div>
                    <input id='txtEmail' type='text' class='form-control' placeholder='이메일 주소를 적어주세요'/>
                </div>
                <div class='input-group mb-3 col-6'>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Phone</span>
                    </div>
                    <input id='txtHP' type='tel' class='form-control' placeholder='전화번호를 적어주세요'/>
                </div>                
                <div class='input-group mb-3 col-12'>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Subject</span>
                    </div>
                    <input id='txtSubject' type='text' class='form-control' placeholder='제목을 적어주세요'/>
                </div>
                <div class='mb-3 col-12'>
                    <textarea id='txtContent' class='form-control' placeholder="내용을 적어주세요">
                    </textarea>
                </div>
                <div class='mb-3 col-12'>
                    <button type='button' class='btn btn-lg btn-mint'>보내기</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactVue',
    data(){
        return {
            
        }
    },
    computed:{

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
}
</style>