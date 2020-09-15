<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item,index) in imgArray" :key="index">
                <img :src="item" alt=""></van-swipe-item>
            </van-swipe>
    </div>
</template>

<script>

export default {
    data(){
        return {
            imgArray : [require('@/assets/images/slider01.jpg'),require('@/assets/images/slider02.jpg'),require('@/assets/images/slider03.jpg'),require('@/assets/images/slider04.jpg'),require('@/assets/images/slider05.jpg'),require('@/assets/images/slider06.jpg'),require('@/assets/images/slider07.jpg'),require('@/assets/images/slider08.jpg'),require('@/assets/images/slider09.jpg'),]
        }
    }
}
</script>

<style lang="scss" scoped>
    .my-swipe{
        width:346px;
        height:140px;
        margin:0 auto;
        border-radius:5px;
        overflow:hidden;
    }
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        text-align: center;
        background-color: yellow;
        img{
            height:140px;
        }
    }
</style>