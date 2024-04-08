<template>
<div class="box">
    <div class="article" v-for="item in blogs">
        <div class="index">{{ item.index }}</div>
        <div class="contents">
            <div class="left">
                <div class="title">{{ item.title }}</div>
                <div class="others">
                    <div class="time">{{ item.time }}</div>
                    <div class="stream">
                        <div class="view">
                            <img class="eye" src="https://s3-alpha-sig.figma.com/img/185d/e884/a99adc307d90ffdb74d6b6581772d610?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=li10a~A~Fcr5aisrhvLrAUeXKOKffARt6j4W7xCi2qjKoTYv2eKKpYoBqsyojytu70x6bw6~np74e4LN7cMu1s5ScApLay9MEqocXLGZ~nxIoqLW9jocFiBErD8Xf4pi~68O-tN5JEBp2gzoLkw89Tc~Kb9N1h4Wwfmmgcos8XQdvfpw~gfrCtwuINEAJe0EHWfd-M5AbCDzSURe3jDDLZRiQxBXd1xT5wginb6HDCdseUsmuSB0Z20u4L7JcTEcsauci9gp-vdsCeA4NP5a0kxYaUW5q5a1OG2MjJwLH890s56D7mCTCuJ0DT5k2WLbKUgipUICOd3LfaIu9yDZBQ__" alt="">
                            {{ item.view }}
                        </div>
                        <div class="pink">
                            <img class="heart" src="https://s3-alpha-sig.figma.com/img/d464/e72e/e6d48f374f0008336a62cf35b3eb1376?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nlNv-DTNWvOb4ap3Dd2WI3p3-Iz6uuQSKfCZCe6~dmY8FJHpMP7BnB0BROJ4d~YXnIXt3llIbZN9g6XuTEQv7fHWehGWR0aX7pkSFl17B3QCpQ~q8IfIWntkl0BV-qH02a1rklesxkWapYpyvL0eCeRXcVap2xqMBJjZVxkOL4KL2VQRWxRX2jLPpM4OhEaymRrzANH0R5094IQ-Mxc8nJv0jtlzJcymNmiOcUOlW5BAP~ffjzPpOTZ94Sx4Q-dPGmW8cGgrLCiXzyxdVUcqLtw2s5Mc~FMGCpNKBB~j-DVFiOWo2Zm4dv-pOhuD9VS1vXgd8L-PQDD0BKejV4aKBA__" alt="">
                            {{ item.pink }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="write">
                    <img class="writeImg" src="https://s3-alpha-sig.figma.com/img/58df/ab21/4acda1f11e8ef72c77aa72c6a07ba3fe?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AJgdNz7vpQLyZ3pZxDlYhpe8SrO1viHFqN06RddFLgplBhMBHQH7xYCsbsQGHy2UfqJ~Di9x0TslWoc6MXsNyJ5f9MfmeCi5xoBRH84xmsgEgqMQ9~yck6xEAQuWvakn~hQxYdLXcRP1iCQjbrP2E7z3bV6m96af0wG39hXu3QvPbZBdbBKJ7jJZlNGRUTbgyVz163JAAyU3iuxT6pOk-JM8DtN10iLlWEn2A9FY9vhL0sy8RT3k8t6~cN-~EwQNGmuKm4Ay3O9FlRfVGlajDs-CQ0IndPc~Ee1OQsT1YUJU--psqoBH3Dx1kU5ODC8CrueBnycIwSzaTuW8wxfwCQ__" alt="">
                </div>
                <div class="delete">
                    <img class="deleteImg" src="https://s3-alpha-sig.figma.com/img/59ec/11aa/edec4c928866b45d048c8f37631a6eb2?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Llr9Zm9u2Pg-f15tPAMXg03OlIZQOepq1g5Piw9Iv0MD3sDFtqNEU4ftl2JHy3aCr3Z6JMUYABkLmi7je4Yvn4pvU~~T7yf7u6xBpDTPKCbQv7pwnQ5TfN-a8LmqjJ~HZhhvYoBz8JlQlYiaHxPW0nA9B-jnfe2wbqHfTeTdnd2eK0lwiTo6pMPqP8-3KbnUbSnARMEIpldQoSFeetuesbh50FZ0NH52r3G5sjlUBCR2jT8U9YDsCdiHk4Rh3yqKCATNcs1oofSR3fz7gecPEYg-qF~kPQx6GPwJ8Ab7tNZwlwc5NUv7RU1LsXHvMSYk63tWK4q426UlaMOQQS3UjA__" alt="">
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data: function(){
        return{
            blogs:[
                {
                index: "01",
                title: "“寻访山西文化新名片”丨遇见古交 成为故交",
                time: "2023-10-30 20:41:00",
                view: "6",
                pink: '0',
                },
                {
                index: "02",
                title: "古交市三座人行天桥提前完工交付使用",
                time: "2023-10-25 20:39:00",
                view: "8",
                pink: '0',
                },
                {
                index: "03",
                title: "昔日火焰山 如今披绿装",
                time: "2022-01-05 11:01:00",
                view: "10",
                pink: '0',
                },
                {
                index: "04",
                title: "看“煤城”如何“美颜” 走进古交感受人居环境之变",
                time: "2021-08-31 07:34:00",
                view: "12",
                pink: "10",
                },
                {
                index: "05",
                title: "山西省古交市加速农村煤改电进程",
                time: "2019-07-21 16:11:32",
                view: "6",
                pink: "2",
                },
            ],
        }
    }
}
</script>

<style scoped>
.box{
    background-color:#F8F8F8;
    border-radius: 3%;
}
.article{
    width: 850px;
    height: 93px;
    margin-top: 10px;
    padding-top:10px;
    background-color:#F8F8F8;
    border-color: #dcdada;
    border-block-end-style: dashed; 
    writing-mode: horizontal-tb;
    border-block-end-width: 6px;
}
.index {
    width: 60px;
    height: 36px;
    margin-left: 20px;
    font-size: 33px;
    font-family:Georgia, 'Times New Roman', Times, serif;
    color: red;
}
.contents{
    width: 850px;
    height: 39px;
    display: flex;
    justify-content: space-between;
}
.left{
    width: 450px;
    height: 39px;
    margin: 10px;
}
.title{
    font-size: 14px;
    /* font-weight: bold; */
}
.others,.stream,.right{
    display: flex;
    justify-content: space-between;
    position: relative;
}
.time{
    font-size: 14px;
    color: #888787;
    margin: 5px 0 px 0;
}
.eye,.heart{
    width: 16px;
    height: 16px;
    margin-right: 2px;
}
.view,.pink{
    font-size: 14px;
    color: #999999;
    margin: 3px 5px 0 5px;
    display: flex;
    align-items: center;
    position: absolute;
}
.pink{
    left: 45px
}
.write,.delete{
    width: 36px;
    height: 36px;
    margin-right: 15px;
    border-radius: 50%;
    position: relative;
}
.write{
    background-color: #F0F000;
}
.delete{
    background-color: #00F000;
;
}
.writeImg,.deleteImg{
    width: 20px;
    height: 20px;
    position: absolute;
    top: 8px;
    left: 8px;
}
</style>
