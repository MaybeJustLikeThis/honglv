<template>
<div class="box">
    <h3>Hi，{{ name }}</h3>
    <div class="content">
        <img class="avatar" :src="imgUrl">
        <div class="informations">
            <PersonalHome></PersonalHome>
            <div class="passwordChange">
                <p>修改密码：</p>
                <input class="passwordInput" type="password" placeholder="请输入密码">
            </div>
            <div class="code">
                <p>验证码：</p>
                <input class="codeInput" type="password" placeholder="请输入验证码">
                <p class="sendCode">发送验证码</p>
                <div class="ok">确定</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import PersonalHome from './PersonalHome.vue';
export default {
    components:{
    PersonalHome
},
    data: function(){
        return{
            name: "第一书记",
            imgUrl:'https://s3-alpha-sig.figma.com/img/814f/2552/b1e57eedf4da97f1df9da8a6d98518dd?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FNwx05YibM9vJveuYaT8qapVEQgLiNMeS~~Tg3UWF1aJLPiBBJVl2MI7Wt6BTFQAFG1CEZE6XfNs0tW-esnUfj0tn1oe0guBMFkOK9-7Q4bjoQOwfXwAR8qJBQipWuQ~ZqZY84aoe0fxXAuv-4mtWVpkSOuKtlvXQ~9tfUs5aMBJa0LD9r2~pkAJctfud9sTikppcHtvEKG51Esb9jHDOfCyimPoD05gjrYSTUcvFXvTNSy5U7MzqRPOAYITHD3ZBxqhrtknSCcV0wCurFcIFSKaRE~HC83gppuSK6RnN7OTJxrUI4w6TTKcYi80~b2CTGJPUBlpWczJpulPZ7zBfg__',
        }
    }
}
</script>

<style scoped>
.box{
    width: 850px;
    height: auto;
    background-color:#F8F8F8;
    border-radius: 1%;
}
h3{
    margin: 30px;
}
.content{
    display: flex;
}
.avatar {
    width: 80px;
    height: 80px;
    margin: 25px 3px auto 30px;
    border-radius: 50%;
    background-color: rgb(169, 215, 215);
}
.informations{
    font-size: 18px;
}
.passwordChange,.code{
    width: 657px;
    height: 45px;
    height: auto;
    display: flex;
    position: relative;
    margin: 30px;
}
.passwordInput,.codeInput{
    width: 270px;
    height: 45px;
    border-style:solid ;
    border-color: rgb(204, 203, 203);
    border-radius: 3%;
    background-color: rgb(242, 221, 221);
    position: absolute;
    right: 280px;
    font-size: medium;
    padding-left: 10px;
}
.sendCode{
    font-size: 15px;
    position: absolute;
    right: 290px;
    color: #7c7c7c;
}
.sendCode:hover{
    color: #959595;
    cursor: pointer;
}
.ok{
    width: 60px;
    height: 30px;
    background-color: rgb(232, 83, 83);
    color: white;
    text-align: center;
    position: absolute;
    right: 50px;
    top: 11px;
    border-radius: 7%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.ok:hover{
    background-color: rgb(215, 37, 37);
}
</style>