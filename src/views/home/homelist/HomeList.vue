<template>
    <div class="container">
        <Header></Header>
        <div class="home_list"><!-- 这里是根节点 -->
            <div class="homelist_img">
                <div class="top_nav">
                    <span class="smimg_box">
                        <img src="../../../assets/images/home_list01.png" alt="">
                        <i>演唱会</i>
                    </span>
                    <span class="smimg_box">
                        <img src="../../../assets/images/home_list02.png" alt="">
                        <i>音乐剧</i>
                    </span>
                    <span class="smimg_box">
                        <img src="../../../assets/images/home_list03.png" alt="">
                        <i>舞台剧</i>
                    </span>
                    <span class="smimg_box">
                        <img src="../../../assets/images/home_list04.png" alt="">
                        <i>儿童剧</i>
                    </span>
                    <span class="smimg_box">
                        <img src="../../../assets/images/home_list05.png" alt="">
                        <i>音乐会</i>
                    </span>
                </div>
                <div class="bottom_nav">
                    <span class="smimg_box">
                        <img src="../../../assets/images/home_list06.png" alt="">
                        <i>欢聚橙卡</i>
                    </span>
                    <span class="smimg_box">
                        <img src="../../../assets/images/home_list07.png" alt="">
                        <i>橙PLUS卡</i>
                    </span>
                    <span class="smimg_box">
                        <img src="../../../assets/images/home_list08.png" alt="">
                        <i>VIP+专区</i>
                    </span>
                    <span class="smimg_box">
                        <img src="../../../assets/images/home_list09.png" alt="">
                        <i>积分兑换</i>
                    </span>
                    <span class="smimg_box">
                        <img src="../../../assets/images/home_list10.png" alt="">
                        <i>闪购</i>
                    </span>
                </div>
            </div>

            <!-- 会员卡专区 -->
            <div class="vip_card">
                <div class="vip_nav">
                    <span class="left"><img src="../../../assets/images/vip_img.png" alt=""><i>会员专享折扣</i></span>
                    <span class="right">99元/年<van-icon name="arrow" /></span>
                </div>
                <div class="vip_bottom" v-for="item in discountList" :key="item.city_id">
                    <img class="discount_movie" :src="item.pic" alt="">
                    <div class="vip_right">
                        <h3>{{item.schedular_name}}</h3>
                        <div class="discount">
                            <span><b>{{item.min_discount}}</b> 折起</span>
                            <button>立即抢购</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <HotShow></HotShow>
    </div>
</template>

<script>
import Header from '../header/Header'
import {get} from '@/api/http'
import HotShow from '@/views/home/hotshow/HotShow'
export default {
    components : {
        Header,
        HotShow,
    },
    data(){
        return{
            discountList : [],
        }
    },
    async created(){
        this.getMovieList();
    },
    methods : {
        async getMovieList(){
            let rs = await get('/vip/index/getVipHomeSchedular');
            // console.log(rs.data.data.discountList);
            this.discountList = rs.data.data.discountList;
        }
    },

    
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/mixin.scss';
    .container{
        .home_list{
            width:100%;
            padding:15px 15px 11px 15px;
            flex:1;
            box-sizing:border-box;
            .homelist_img{
                width:100%;
                .top_nav,.bottom_nav{
                    width:100%;
                    height:70px;
                    .smimg_box{
                        float:left;
                        display:flex;
                        flex-direction:column;
                        width:69px;
                        height:64px;
                        justify-content:center;
                        align-items:center;
                        img{
                            width:40px;
                        }
                        i{
                            font-style:normal;
                            font-size:12px;
                            color:#666666;
                        }
                    }
                }
                
            }
            .vip_card{
                width:100%;
                height:150px;
                box-sizing:border-box;
                overflow:hidden;
                padding-left:15px;
                border:1px #EFDBC3 solid;
                background:#FFFCF5;
                box-sizing:border-box;
                .vip_nav{
                    @include addline(#F8ECDC);
                    width:315px;
                    box-sizing:border-box;
                    font-size:12px;
                    padding-top:10px;
                    height:40px;
                    position:relative;
                    color:#6B4218;
                    .left{
                        float:left;
                        height:20px;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        i{
                            font-style:normal;
                        }
                        img{
                            width:20px;
                        }
                    }
                    .right{
                        float:right;
                    }
                }
                .vip_bottom{
                    display:flex;
                    padding:15px 0;
                    .discount_movie{
                        width:55px;
                        
                    }
                    .vip_right{
                        padding-left:10px;
                        h3{
                            width:220px;
                            font-style:normal;
                            font-weight:400;
                            font-size:14px;
                        }
                        .discount{
                            width:220px;
                            padding-top:15px;
                            span{
                                font-size:12px;
                                color:#999999;
                                b{
                                    font-size:16px;
                                    color:#FF6743;
                                }
                            }
                            button{
                                float:right;
                                width:74px;
                                height:22px;
                                background:#FFFCF5;
                                color:#FF6743;
                                border:1px #FF6743 solid;
                                border-radius:11px;
                                font-size:12px;
                                box-sizing:border-box;
                                padding-bottom:4px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>