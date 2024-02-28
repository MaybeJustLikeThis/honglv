<template>
    <div class="closeBox">
        <div class="close" @click="cancelClick()">
            <img class="close" src="https://s3-alpha-sig.figma.com/img/f154/f7fc/0921afd59f639be76b0824902885bf18?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dZW5kDvttxmJiAXcEqT2DYx93M3Zo1zl3fIE4FLywIQYY~1VIL7Ui7aLJoTeBcXNDoqxmY3s7zU5w~5HTmDg~ZmGXi7wYxjh-yoDJ0JtLa9IvvMdJPMNmotDZTajSSo6NjKX7F0xhQLnKWyQSE1ZPc142mz8iSJJIOQfLJqdpGOVpAEXvDSYpYpixzldWc01-5oKKZbynBpIlx5c49Smf58BLGp5BZmy5gXcXHuSGUbOdzTPjQM6EzEni7srf6JO-FEQqN3O0py7DkH3XCV67GANVx9fsNWY9lqU4Oz5vcCLoMvMK8-E9K9MP7rZCAW5flwR9ikL0Uvzu9ca0PD5fg__" alt="">
        </div>
        <p class="tip">确定注销账号？</p>
        <div class="sure" @click="sureClick()">确定</div>
        <div class="cancel" @click="cancelClick()">取消</div>
    </div>
</template>

<script>
export default {
    emits:["sureClick","cancelClick"],
    methods:{
        sureClick(){
            this.$emit("sureClick")
        },
        cancelClick(){
            this.$emit("cancelClick")
        }
    }
}
</script>

<style scoped>
.closeBox{
    width: 250px;
    height: 163.1px;
    background-color: #fff;
    overflow: hidden;
    border-radius: 8px;
    z-index: 300;
    position: relative;
}
.close{
    width: 20px;
    height: 21.75px;
    margin: 5px;
    position: absolute;
    top: 0px;
    right: 0px;
    cursor: pointer;
}
.tip{
    font-size: 15px;
    position: absolute;
    top:25px;
    left: 78px;
}
.sure,.cancel{
    width: 50px;
    height: 30.45px;
    font-size: 12px;
    text-align: center;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.sure{
    background-color: red; 
    color: white;
    position: absolute;
    left: 60px;
    bottom: 31px;
    border-color: red;
    border-style: solid;
}
.cancel{
    background-color: #F8F8F8; 
    color: #666666;
    position: absolute;
    right: 60px;
    bottom: 31px;
    border-color: #666666;
    border-style: solid;
}
</style>