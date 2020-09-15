<template>
<div>
    <div class="container">
        <router-link class="city" to="/city" tag="div"><van-icon name="location" class="location" /><span>全国</span></router-link>
        <div class="input_box">
            <van-icon name="search" class="search_icon" />
            <span>搜索热门演出</span>
        </div>
        <img src="../../../assets/images/date_btn.png" class="date_btn" alt="">
    </div>
    <Slider></Slider>
</div>
    
</template>

<script>
import Slider from './slider/Slider'
export default {
    components : {
        Slider,
    }
}
</script>

<style lang="scss" scoped>
    .container{
        position:relative;
        width:100%;
        box-sizing:border-box;
        height:44px; 
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:0 15px;
        .search_icon{
            font-size:20px;
            color:#C2C2C2;
        }
        .city{
            display:flex;
            height:20px;
            font-size:16px;
            font-weight:900;
            line-height:20px;
            .location{
                color:#FF6F40;
                font-size:20px;
            }
        }
        .input_box{
            position:relative;
            width:240px;
            height:28px;
            border:1px #EDEDED solid;
            border-radius:14px;
            background:#F5F5F5;
            padding:4px 8px 4px 10px;
            box-sizing:border-box;
            span{
                font-size:12px;
                color:#C2C2C2;
                position:absolute;
                top:5px;
                left:32px;
            }
        }
        .date_btn{
            width:20px;
            height:20px;
        }
    }
</style>



