<template>
    <div class="product">
        <div class="edit_box"></div>
        <div class="rotate">
            <div class="edit_icon">
                <img src="../../../public/Admin/edit_icon.png" alt="">
            </div>
            <div class="delete_icon">
                <img src="../../../public/Admin/delect_icon.png" alt="">
            </div>
        </div>

        <div class="text">
            <div class="title">
                <slot name="title">
                    角子崖
                </slot>
            </div>
            <div class="des">
                <slot name="des">
                    绝美大片打卡地
                </slot>
            </div>

            <div class="extra">
                <div class="data">
                    <slot name="data">
                        2022-06-15 18:18:05
                    </slot>
                </div>

                <div class="view">

                    <img src="../../../public/Admin/浏览.png" alt="" class="viewImg">

                    <div class="viewNum">
                        <slot name="view">
                            15
                        </slot>
                    </div>
                </div>

            </div>
        </div>

        <slot name="img">
            <img src="https://s3-alpha-sig.figma.com/img/cff8/744d/b9118a219ba6432eb603ca325a6f9501?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o4BQ0JCTebcOQh~L7Oh2TEG3FA4mxJ6IawdsmkB03Tl0JzC70KlenNFwGXvlPDVlX5aW4ApYtM9JfkI6A3~kYPb2DOgUQAHDnURgC9NoKPlc1D1dfech2yoy0kFbBowV68naVBtfos-LYb4-cG0hOsABe~UUsAtcLk2GhlES0NklfOq4W7ktV9ZywTP-YFlyNHwhGxHgQTowLNtSKEXI-RoVveYSpomGrgJBe9Cbnnf1h4Yd43jlmHv455fO-vnGlzmWLTknQhxKmsDFTHNa6cywVvyBTB~bH8THk33nWfyfRmjpTBmA1~AtM-eJES~ZE5rDX~-ehNzEQOF8NwX4Lg__"
                alt="" class="productImg">
        </slot>
    </div>
</template>

<script setup>
// import { ref } from 'vue'
</script>

<style scoped>
.product{
    position: relative;
    display: flex;
    justify-content: space-between;
    border-bottom:1px rgba(201, 200, 200, 1) dashed ;
    height: 88px;
    align-content: center;
    /* overflow: auto; */
    overflow: hidden;
}

.text{
    display: flex;
    flex-direction: column;
    justify-content:space-around ;
    margin-left: 30px;
}
.title{
    display: block;
    /* margin:0; */
    font-family: Abel;
    font-size: 14px;
    font-weight: 400;
    line-height: 17.84px;
    text-align: left;
    width: 275px;
    height: 18px;
    color: rgba(51, 51, 51, 1);
    margin-top:20px ;
}
.des{
    font-family: Abel;
    font-size: 10px;
    font-weight: 400;
    line-height: 12.74px;
    text-align: left;
    color:rgba(102, 102, 102, 1);
    display: inline-block;
    margin:0;
    /* width: 121px; */
    height: 13px;
    margin-top:15px;

}

.productImg{
    width: 77px;
    height: 55px;
    margin-top:15px;
    margin-right: 30px;
}

.extra{
    align-content: center;
    margin-bottom: 8px;    
    margin-top: 2px;
    height: 13px;
    line-height: 13px;
    display: flex;
    /* align-items: center; */
}
.data{
    font-family: Abel;
    font-size: 8px;
    font-weight: 400;
    line-height: 13px;
    text-align: left;
    color: rgba(153, 153, 153, 1);
    display: inline-block;
    height: 13px;
    width: 121px;
}
.view{
    display: flex;
    height: 13px;
    /* width: 121px; */
}
.viewNum{
    font-family: Abel;
    font-size: 8px;
    font-weight: 400;
    line-height: 13px;
    text-align: left;
    color: rgba(153, 153, 153, 1);
    height: 10px;
    width: 121px;
    margin-left:2px ;
}
.viewImg {
    width: 13px;
    height: 13px;
    /* margin-top: 5px; */
}

.edit_box{
    border-radius: 0 0 0 100%;
    width: 84px;
    height: 73px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0);
    top:0;
    right: 0;
    /* display: none; */
    /* transform: rotate(90deg); */
    /* rotate:90deg; */
    transition: all 2s;
}
.product:hover .edit_box{
    border-radius: 0 0 0 100%;
    width: 84px;
    height: 73px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    top: 0;
    right: 0;
}
img{
    height: 10px;
    width: 10px;
}
.rotate{
    position: absolute;
    /* background-color: rebeccapurple; */
    width: 168px;
    height: 146px;
    top: -73px;
    right: -84px;
    rotate: 90deg;
    /* transition: rotate(-90deg) 3s; */
    /* transition-duration: 3s; */
    transition: all 1.7s;
}
.product:hover .rotate{
    transform: rotate(-90deg);
}
.edit_icon{
    height: 19px;
    width: 19px;
    background-color: rgba(1, 255, 1, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    top: 85px;
    right: 122px;
    z-index: 10;
}
.delete_icon{
    height: 19px;
    width: 19px;
    background-color: rgba(255, 0, 0, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    top: 104px;
    right: 97px;
}

</style>