<template>
    <div class="content" v-for="(item, index) in inputMassage">
        <p>{{ item.type }}</p>
        <input class="input" type="text" id="item">
        <div class="inputButton" id="index">
            <img class="change" :src="imgUrl">
        </div>
        <div class="ok">确定</div>
    </div>
</template>

<script>
export default {
    data:function(){
        return{
            imgUrl:"https://s3-alpha-sig.figma.com/img/677a/0c5a/002d30f33e2d917c514b45baefde7f91?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iD1zsqsqYVgFb~ZOfc9iA6RzCV0HpejuCCTqy0UjSwQoXM0H4UsmwQuNolMYFFF5y5cPdk9u1amVYktoT7GMQkWB-SO40XB4wyOrW4tgNgietw1l8vBL9Prhq2glDVWFx0LoClRAYmCM11VYASBdW9TC~iQvWZE56RV~apPt7gvkAc2ZedQoeNlmzHVF4krGjMhSTfMBQd30vh1I8-aNO2aQ8P1OVura3D9UTpyaOk0A9LyjuptX42P2Ld2tqrf1PSLMFt-dHKx44CbKZ~kd5u7T8pqPBQgLDDsc4QQ5VQ34TJ5bi-Qy8ydQ29yjfQbhwZLyjM6txaxDP~~jwXUDEA__",
            inputMassage:[
                {
                    type:"用户名:",
                    value:'',
                },
                {
                    type:"性别：",
                    value:'',
                },
                {
                    type:"年龄：",
                    value:'',
                },
                {
                    type:"个性签名：",
                    value:'',
                },
                {
                    type:"账号：",
                    value:'',
                },
                {
                    type:"身份证号：",
                    value:'',
                },
                {
                    type:"QQ号：",
                    value:'',
                },
                {
                    type:"微信号：",
                    value:'',
                },
                {
                    type:"邮箱：",
                    value:'',
                },
            ]
        }
    }
}
</script>

<style scoped>
.content{
    width: 657px;
    height: 45px;
    height: auto;
    display: flex;
    position: relative;
    margin: 30px;
}
.change{
    width: 20px;
    height: 20px;
    position: absolute;
    top: 15px;
    right: 230px;
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
.input{
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
.inputButton{
    cursor: pointer;
}
</style>