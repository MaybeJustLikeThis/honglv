<template>
    <div class="box">
        <img class="avatar" :src="imgUrl">
        <div class="nickname">
            <p>{{ name }}</p>
            <img class="sex" :src="sexUrl">
        </div>
        <div class="signature">{{ signature }}</div>
        <div class="stream">
            <div class="streamItems" v-for="item in clickstream">
                <div class="item">{{ item.item }}</div>
                <div class="number">{{ item.number }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                imgUrl:'https://s3-alpha-sig.figma.com/img/814f/2552/b1e57eedf4da97f1df9da8a6d98518dd?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FNwx05YibM9vJveuYaT8qapVEQgLiNMeS~~Tg3UWF1aJLPiBBJVl2MI7Wt6BTFQAFG1CEZE6XfNs0tW-esnUfj0tn1oe0guBMFkOK9-7Q4bjoQOwfXwAR8qJBQipWuQ~ZqZY84aoe0fxXAuv-4mtWVpkSOuKtlvXQ~9tfUs5aMBJa0LD9r2~pkAJctfud9sTikppcHtvEKG51Esb9jHDOfCyimPoD05gjrYSTUcvFXvTNSy5U7MzqRPOAYITHD3ZBxqhrtknSCcV0wCurFcIFSKaRE~HC83gppuSK6RnN7OTJxrUI4w6TTKcYi80~b2CTGJPUBlpWczJpulPZ7zBfg__',
                name: "第一书记",
                sexUrl:'https://s3-alpha-sig.figma.com/img/ecba/8c1d/28ae22cba14cdf20c3bc46afb6d47430?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qGRV~AuV0jEIxCy~fdZCvqGxwRreu6Y09RzKMoc9IbU~1laaIMq-JY4rJmiyh3mM7sUu-gQDhEanX5yoADB5ROT2as4lejauR~Ejpq4D2qlKOHUZeDRFSfEhL7tNnOgujSevtmZtzUmRQwVoEqJKD7f0jAjFhEjK1a7usxO4oWrUE1qs~xUX6tWC0ge~F-SU6elMP6PKvNj7qoBFyH0i9Mzf8EucFMnVzmtsC4F-3ZJqNzykE0Vm~o8VGtX-~g3lCzFgea6jNjGTYQuk~yeKuq5DSbCNhkvgY4Q3mcqEgMQDr16ucbz-dOEayn~ED1k7xwbnjjBUcUXdGohVNUBCcw__',
                signature:'该用户很懒，还没设置签名',
                clickstream:[
                    {item:'博客', number:5},
                    {item:'人气', number:40},
                    {item:'获赞', number:12},
                ]
            }
        }
    }
</script>

<style scoped>
.box {
    width: 243px;
    height: 274px;
    border-radius: 5%;
    background-color: #F8F8F8;
    margin-top: 25px;
    position: relative;
}
.avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgb(179, 200, 200);
    position: absolute;
    top: 50px;
    left: 96.5px;
}
.nickname{
    width: 243px;
    height: 20px;
    text-align: center;
    position: absolute;
    top: 120px;
    font-size: 15px;
    font-weight: 700;
    display: flex;
    justify-content: center;
}
p {
    margin: 0 5px;
}
.signature {
    width: 243px;
    height: 14px;
    font: 12px;
    text-align: center;
    position: absolute;
    top: 144px;
    font-size: 13px;
}
.stream{
    width: 243px;
    height: 38px;
    display: flex;
    justify-content: space-around;
    position: absolute;
    top: 175px
}
.item,.number{
    margin: 10px;
    text-align: center;
}
.item{
    font-size: 13px;
    color: rgb(116, 115, 115);
}
.number{
    font-size: 14px;
}
</style>