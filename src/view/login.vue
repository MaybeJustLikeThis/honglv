<script setup >
import {ref} from 'vue'
let index = ref(0);


</script>
<template>
<div class="all">
    <div class="user-box">
        <div class="content">
            <div class="title">
               旅行网 统一身份认证
            </div>
            <div class="submit-change">
                <div class="phone-submit" :class="{'active':index === 0}" @click="index = 0">验证码登陆</div>
                <div class="userpassword-submit" :class="{'active':index === 1}" @click="index = 1">账号登陆</div>
            </div>
            <div class="phone" v-if="index===0">
                <div class="phone-one">
                <img class="user-alavator" src="https://xuejiangbin.oss-cn-beijing.aliyuncs.com/user-alavator.png">
                <input class="phone-number" type="text" placeholder="请输入手机号">
                </div>

                <div class="phone-two">
                <img class="username" src="https://xuejiangbin.oss-cn-beijing.aliyuncs.com/username.png">
                <input class="verification" type="password" placeholder="请输入验证码">
                </div>
                <button class="login">登陆/注册</button>
            </div>
            <div class="userpassword" v-else>
                <div class="phone-one">
                <img class="user-alavator" src="https://xuejiangbin.oss-cn-beijing.aliyuncs.com/user-alavator.png">
                <input class="phone-number" type="text" placeholder="请输入账号">
                </div>

                <div class="phone-two">
                <img class="username" src="https://xuejiangbin.oss-cn-beijing.aliyuncs.com/username.png">
                <input class="verification" type="password" placeholder="请输入密码">
                </div>
                <button class="login">登陆/注册</button>
            </div>  
            <div class="other">
                <div class="left"></div>
                <div class="middle">其他方式</div>
                <div class="right"></div>
            </div>
            <div class="other-way">
                <div class="wechat">  <img src="https://xuejiangbin.oss-cn-beijing.aliyuncs.com/wechat.png" width="12px" height="12px">微信</div>
                <div class="qq"><img src="https://xuejiangbin.oss-cn-beijing.aliyuncs.com/qq.png"  width="12px" height="12px">qq</div>
                <div class="weibo"> <img src="https://xuejiangbin.oss-cn-beijing.aliyuncs.com/weibo.png"  width="12px" height="12px">微博</div>
            </div>
        </div>
    </div>
</div>
</template>
<style scoped lang='css'>
.all{
    width: 100vw;
    height: 100vh;
    background-image: url("https://xuejiangbin.oss-cn-beijing.aliyuncs.com/background.png");
    background-repeat: no-repeat;
    background-size:cover;
}

.user-box{
    position: absolute;
    top:50%;
    left:50%;
    margin-top:-290px;
    margin-left:-214px;
    Width:428px;
    Height:580px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 40px;
}

.title{
    width: 339px;
    height: 66px;
    position: relative;
    font-size: 28px;
    margin: 0 auto;
     margin-top:50px;
    text-align: center;
    color: white;
}

.content{
    width: 340px;
    height: 580px;
    margin: 0 auto;
    color: white;
}

.phone-submit{
    display:inline-block;
    margin-top:25px;
    margin-bottom: 25px;
    width: 170px;
    height: 40px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
}

.userpassword-submit{
    display:inline-block;
    margin-top:25px;
    margin-bottom: 25px;
    width: 170px;
    height: 40px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
}

.active{
    border-bottom: 2px solid red;
}

.phone,
.userpassword{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 340px;
    height: 250px;
}

input{
    height: 55px;
    font-size: 25px;
    padding-left: 60px;
    border-radius: 12px;
    width: 275px;
}

button{
    margin-top:20px;
    height: 50px;
    background-color: red;
    color: white;
    font-size:15px;
}

input::-webkit-input-placeholder {
    /* placeholder颜色 */
    color: #aab2bd;
    /* placeholder字体大小 */
    font-size: 15px;
    line-height: 55px;
}

.user-alavator{
    position: absolute;
    top:50%;
    margin-top:-12px;
    margin-left:20px;
}

.phone-one {
    position: relative;
 
}

.phone-two{
    position: relative;
    
}

.username{
    position:absolute;
    top:50%;
    margin-top:-12px;
     margin-left:20px;
}

.left{
    display: inline-block;
    width: 127px;
    border-bottom:1px solid white;
}

.right{
    display: inline-block;
    width: 127px;
    border-bottom:1px solid white;
}

.middle{
    display: inline-block;
    width: 86px;
    text-align: center;
}

.other-way{
    margin:  0 auto ;
    margin-top:20px;
    width: 240px;
    height: 50px;
}

.wechat{
    display: inline-block;
    text-align: center;
    width: 80px;

}

.qq{
     display: inline-block;
    text-align: center;
    width: 80px;
}

.weibo{
    display: inline-block;
    text-align: center;
    width: 80px;
}
</style>