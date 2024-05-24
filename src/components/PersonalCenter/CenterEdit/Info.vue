<template>
<div class="title">个人信息</div>
<div class="content">
    <div class="form">
        <div class="id">ID </div>
        <div class="nickname">
            <div class="word">昵称</div>
            <input class="input" type="text" value="喜羊羊" :disabled="isDisabled">
        </div>
        <div class="name">
            <div class="word">真实姓名</div>
            <input class="input" type="text" value="张三" :disabled="isDisabled">
        </div>
        <div class="age">
            <div class="word">年龄</div>
            <input class="input" type="text" value="18" :disabled="isDisabled">
        </div>
        <div class="gender">
            <div class="word">性别</div>
            <input class="radio" type="radio" value="男" name="gender" checked :disabled="isDisabled">男
            <input class="radio" type="radio" value="女" name="gender" :disabled="isDisabled">女
        </div>
        <div class="idcode">
            <div class="word">身份证号</div>
            <input class="input" type="text" value="140156***********59" :disabled="isDisabled">
        </div>
        <div class="buttons">
            <div class="button1" @click="change()">修 改</div>
            <div class="button1" @click="save()">保 存</div>
        </div>
    </div>
    <div class="avatarpart">
      <div class="avater">
        <img class="avatar" src="https://s3-alpha-sig.figma.com/img/814f/2552/b1e57eedf4da97f1df9da8a6d98518dd?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L9YhphsOcCC6u~4n4PP-E1wFG3pfe9jazQfVRk8HBeooDFTaIMMuSu4RWFpbXqHmpGa~cmbgAgfmS2FnkDfGMFx33uRhPxd2hhN3-G6Yj9MWOqZnZmYnOTF4rSu1pv4G180RchvYt29sLkNd5kcpbF5NJFepzmcyqhx5~E6vOM7vSlBW4yPt1K2Yvf3bBKTgUqkrB7TqYdpwkNV0mPSE76-0YDuiSJ2hMBLKr4pjAXZ8LINHDy51WA7yRvlyETIAXHIH14QVGIunCmBrxujofjn1fKwtwXQnFwYUHzSPFQ0j2WCgSAvuQe56R0dCI4DHo-otZb0mbCfhAgg6ue5xWg__">
      </div>
        <div class="button2">更换头像</div>
        <div class="word2">用户身份：<div id="span">管理员</div></div>
    </div>
</div>
</template>

<script setup>
    import { ref, onMounted, reactive } from "vue";
    // import { getInfo, changeInfo } from '@/utils/api/centerApi/index.js'

    let isDisabled = ref(true);
    // let info = reactive({
    //   id: '',
    //   nickname: '',
    //   name: '',
    //   age: '',
    //   gender: '',
    //   idcode: '',
    //   avatar: ''
    // })

    const change = () => {
        isDisabled.value = false
        console.log(isDisabled);
    }
    const save = () => {
        isDisabled.value = true
        console.log(isDisabled);
    }

    // onMounted(() => {
    //     getInfo().then((res) => {
    //         info.value = res.data;
    //     });
    // });

</script>

<style scoped>
  .title{
    height: 50px;
    width: 680px;
    /* position: absolute; */
    border-bottom: 2px solid #C9C8C8 ;
    margin-left: 50px;
    font-size: 24px;
    padding-top: 20px;
  }
  .content{
    height: 456px;
    width: 597px;
    margin-left: 50px;
    display: flex;
  }
  .id{
    font-size: 16px;
    color: #666666;
    margin: 15px auto 20px 0;
  }
  .word{
    width: 64px;
    height: 20px;
    font-size: 16px;
    text-align: justify;
    text-align-last: justify;
    margin: 5px 40px 5px 0;
  }
  .input{
    width: 320px;
    height: 31px;
    border: 2px solid #C9C8C8;
    margin-bottom: 15px;
    border-radius: 5px;
    padding-left: 8px;
  }
  .gender{
    display: flex;
    margin-bottom: 15px;
  }
  .radio{
    margin: 0 10px 0 40px;
    transform:scale(1.5);
  }
  .buttons{
    display: flex;
    margin-top: 40px;
  }
  .button1{
    width: 87px;
    height: 30px;
    background-color: #FFE4E4;
    border-radius: 5px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    margin-left: 40px;
  }
  .avatarpart{
    width: 200px;
    margin: 20px auto auto 130px;
  }
  .avatar{
    width: 125px;
    height: 125px;
    border-radius: 50%;
    background-color: #FFE4E4;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  .button2{
    width: 101px;
    height: 30px;
    border: 2px solid #C9C8C8;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 20px;
    margin-left: 11px;
  }
  .word2{
    font-size: 16px;
    display: flex;
    width: 160px;
    margin-left: -8px;
  }
  #span{
    width: 67px;
    height: 23px;
    background-color: #D8ECFF;
    border: 2px solid #1E90FF;
    border-radius: 5px;
    font-size: 14px;
    color: #1E90FF;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>