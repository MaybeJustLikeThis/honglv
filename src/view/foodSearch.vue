<template>
<div class="banner">
    <div class="word">吃在嘴中，味在心里</div>
    <div class="box">
	    <input type="text" class="input" placeholder="美食">
	    <input type="button" value="搜索" class="button">
    </div>
</div>
<div class="content">
        <food-view></food-view>
    </div>
</template>

<script setup>
    import FoodView from "@/components/foodSearch/FoodView.vue";

    
</script>

<style scoped>
    .content{
        width: 1200px;
        height: auto;
        margin: 0 auto;
        display: flex;
    }
    .banner{
        width: auto;
        height: 600px;
        background-color:beige;
        /* background-image: "https://s3-alpha-sig.figma.com/img/d6d8/0d75/39632b77013fbc9bfcbdb4a303f1d9b6?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BB7EPFgXnTILJWIMdgUDMDoJz5NzSBTdAA7IeVV6mjsTeMikpVZ5gmxB8k0gcTSF-yFDnJbM4EVGTMQyMgUSJ-YF7RrXholvdnMtOGr5ciJbDJ8ySDfLN67bakufQych-6pww77QkiYFCzGa5bRWa7pXU7UEassjlOl5Gw21RwdYnxy7mgkVOzZn4wpE3xAIpwOhYK7t2F0vCKoZ98iIuYTLTxaoH2YGzUmzSEHhEvNwtrMCyFcYkbRn9nITu~89ayf~qvUuk1~AR2ZAzkmpuCGaL6xMselK2JSeCfeTf7hD0NYdpjU2l57pMvioUKc-KR~5RdmqL1H84UGMRTtFag__";
        background-repeat: no-repeat; */
        position: relative;
    }
    .word{
        position: absolute;
        top: 20px;
        left: 421px;
        color: white;
    }
	.box{
		width:500px;
		height:40px;
		border:10px solid rgba(0,0,0,0.4);
        border-radius: 5px;
		margin: 0 auto;
        position: absolute;
        top: 450px;
        left: 421px;
	}
	.input{
		float:left;
		width:400px;/*宽400*/
		height:38px;/*高38（因为文本框内外边框要占用1像素所以总体高度减2，其他盒子同理）*/
		outline:none;
		border:none;/*取消文本框内外边框*/
	}
    .button{
	float:left;
	width:96px;
	height:40px;
	color:white;
	background-color:#FF8A00;
	border:none;
	outline:none;/*取消边框和外边框将按钮边框去掉*/
}
</style>