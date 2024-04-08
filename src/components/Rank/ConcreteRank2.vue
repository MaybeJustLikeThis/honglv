<template>
  <div class="box">
    <div class="title">
      <p>{{ category }}</p>
    </div>
    <div class="content">
      <div class="rankItem" v-for="item in hotel">
        <div class="image">
          <img class="image" :src="item.thingImg" />
        </div>
        <div class="introduction">
          <div class="index">{{ item.index }}</div>
          <div class="nameAddress">
            <div class="info">
              <div class="name">{{ item.thingName }}</div>
              <div class="pink">
                推荐指数：
                <img
                  class="star"
                  v-for="star of item.star"
                  src="https://s3-alpha-sig.figma.com/img/3bf6/7525/e8aa80a357e0bba262e279533c8028c1?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CpEhpQHl5i5CGCwCzN7eDovXgixpBSznDfsno09~7PZWHrdX-t1IRxHCzQ41W1qtZGMhlTya9aVjOYDpPuvBDIsEAsPezEeSeME7baNozM5SPM8wB2z7sgz702ZRPFjXVslFsDxAHrwhKGhXfHwwATsye9Nt0UfWgUorZ59lPh1zkTypRr8VdMcR6WvLBpp2F7uaDXpDp6CBlBz0eNp55F3id7b1cKg4~MbkpdOlLL8adKLydKKymet-6X9H8rNEeR92LJgbzLe7c4ROOE6PcaWcybDNkgOg-uCmst4L9oDygo8ZT1hO4x1txhMNyW91jGTDvIH-IMJk5ygK18y3JA__"
                />
              </div>
            </div>
            <div class="addressInfo">
              <img
                class="layout"
                src="https://s3-alpha-sig.figma.com/img/11f0/1373/e79e1f966340e46dc3a39451381d5297?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NrJ0aVEZv9L~l9~IOaGmF5l~AhQG6u7bdev-DeZDu0MRNeslXbzyUwn~n58v-ZxwVDD1IB4xaB3GpIRSDd2yQOoDM8l3rHIWWTg1A~Tav7jqwcebrON6W2J9SCsAsvXDvygcr4mO5639QZS~6f2Plk~blsTu668CqjqhFKBnlbAuvkKC3AQh7NDRZxemr2hWdlEwzvesLVQmDCjcLXyJAzpmlYlGk8dyYiJAL3NQefjBUDmPruBFg5Z0khJS2b03hVudwRrGOPcukMIs4MYnj-HvX~H5wqAEYXrFt924msn3gGzHElJDmJs1mw9lYR4GM2cNDaOmMlJTESS9oWIuGA__"
                alt=""
              />
              {{ item.address }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import hotel from "@/store/Rank/hotel.js";
export default {
  data: function () {
    return {
      category: "酒店推荐",
      hotel: hotel,
    };
  },
};
</script>

<style scoped>
.title {
  width: 1121px;
  height: 60px;
  background: linear-gradient(to right, red, white);
  margin: 10px;
  display: flex;
  align-items: center;
}
p {
  font-size: 24px;
  margin-left: 30px;
  color: white;
  font-family: "Times New Roman", Times, serif;
}
.content {
  width: 1063px;
  height: 1104px;
  margin: 0 auto;
}
.rankItem {
  width: 1063px;
  height: 108px;
  display: flex;
  border-color: #c3c2c2;
  border-block-end-style: dashed;
  writing-mode: horizontal-tb;
  border-block-end-width: 3px;
}
.image {
  width: 136.85px;
  height: 98px;
  margin-top: 3px;
}
.introduction {
  width: 600px;
  height: 108px;
  display: flex;
  position: relative;
}
.nameAddress {
  margin-top: 20px;
  margin-left: -9px;
}
.index {
  width: 60px;
  height: 36px;
  margin: 20px 0px 0px 25px;
  font-size: 35px;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: red;
}
.name {
  font-size: 14px;
  font-weight: bold;
  margin: 8px auto 10px 20px;
}
.addressInfo,
.info {
  display: flex;
  font-size: 12px;
  align-items: center;
}
.addressInfo {
  color: #606060;
}
.layout {
  width: 30px;
  height: 30px;
  margin-left: 10px;
}
.pink {
  position: absolute;
  left: 350px;
  display: flex;
}
.star {
  width: 16px;
  height: 16px;
}
</style>
