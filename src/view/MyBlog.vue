<template>
    <div class="root">
        <Header></Header>
            <div class="container">
                <Path></Path>
                <div class="mainContainer">
                    <div class="information">
                        <Menu @itemClick="itemClick"></Menu>
                        <PersonalInformation></PersonalInformation>
                    </div>
                    <div class="blogs" v-if="currentIndex === 0||currentIndex === 2">
                        <ConcreteBlogs></ConcreteBlogs>
                        <BlogButton></BlogButton>
                    </div>
                    <div class="myHome" v-else-if="currentIndex === 1||currentIndex === 2">
                        <MyInformantion></MyInformantion>
                    </div>
                    <div class="mask" :class="{active:currentIndex === 2}"></div>
                    <div class="writeOff" v-show="currentIndex === 2">
                        <Cancel @cancelClick="cancelClick"></Cancel>
                    </div>
                </div>
            </div>
        <Bottom></Bottom>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Path from "../components/MyBlogComponents/Path.vue";
import Menu from "../components/MyBlogComponents/Menu.vue";
import PersonalInformation from "../components/MyBlogComponents/PersonalInformation.vue";
import ConcreteBlogs from "../components/MyBlogComponents/ConcreteBlogs.vue";
import BlogButton from "../components/MyBlogComponents/BlogButton.vue";
import Bottom from "../components/Home_Bottom/Bottom.vue";
import PersonalHome from "../components/MyBlogComponents/PersonalHome.vue";
import MyInformantion from "../components/MyBlogComponents/MyInformantion.vue";
import Cancel from "../components/MyBlogComponents/Cancel.vue"

export default {
    components: {
    Header,
    Path,
    Menu,
    PersonalInformation,
    ConcreteBlogs,
    BlogButton,
    Bottom,
    PersonalHome,
    MyInformantion,
    Cancel
    },
    data:function(){
        return{
            currentIndex: 0,
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex = index
        },
        cancelClick(){
            this.currentIndex = 1
        }
    }
}
</script>

<style scoped>
.active{
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 200;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
}
.root{
    justify-content: center;
    align-items: center;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    position: relative;
}
.container {
    width: 1121px;
    height: auto;
    margin: 0 auto;
    /* background-color: beige; */
}
.mainContainer {
    width: auto;
    height: auto;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
}
.blogs,.myHome{
    width: 850px;
    height: auto;
    background-color:#F8F8F8;
    border-radius: 1%;
}
.fanye{
    display: flex;
    justify-content: right;
}
.writeOff{
    width: 250px;
    height: 163.1px;
    background-color: #fff;
    overflow: hidden;
    position: absolute;
    top: 300px;
    margin: auto;
    border-radius: 8px;
    z-index: 300;
}
.close{
    width: 20px;
    height: 21.75px;
    margin: 5px;
}
</style>