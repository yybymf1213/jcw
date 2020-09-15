<template>
<div class="big_container">
    <div class="container">
    </div>
    <div class="main">
        <router-view></router-view>
    </div>
    <ul class="bottom">
        <router-link active-class="change_color" to="/home/homelist" tag="li"><div class="bottom_nav"><van-icon class="nav_icon" name="wap-home" />首页</div></router-link>
        <router-link active-class="change_color" to="/home/theatre" tag="li"><div class="bottom_nav"><van-icon class="nav_icon" name="send-gift" />剧院</div></router-link>
        <router-link active-class="change_color" to="/home/ticket" tag="li"><div class="bottom_nav"><van-icon class="nav_icon" name="card" />票夹</div></router-link>
        <router-link active-class="change_color" to="/home/my" tag="li"><div class="bottom_nav"><van-icon class="nav_icon" name="manager" />我的</div></router-link>
    </ul>
    <!-- 热门演出 -->
    
</div>
    
    
</template>

<script>

export default {
    
}
</script>


<style lang="scss" scoped>
.big_container{
    width:375px;
    height:100px;
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    .main{
        flex:1;

    }
    .bottom{
        background:#fff;
        display:flex;
        width:100%;
        justify-content:space-around;
        position:fixed;
        height:50px;
        box-sizing:border-box;
        padding-top:5px;
        bottom:0;
        left:0;
        li{
            .bottom_nav{
                display:flex;
                flex-direction:column;
                text-align:center;
                color:#3C3C3C;
                font-size:12px;
                .nav_icon{
                    font-size:26px;
                }
            }
            
        }
        .change_color .nav_icon{
            color:#FF6F40;
        }
    }
}
    
</style> 