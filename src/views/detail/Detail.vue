<template>
    <div>
        <!-- 上方模糊框 -->
        <div class="vague_box">
            <div class="vague_frame"></div>
        </div>
        <div class="vague_header">
            <van-icon class="top_icon return_icon" name="arrow-left" />
            <h3>演出详情</h3>
            <div class="icon_box">
                <van-icon class="top_icon" name="share-o" />
                <van-icon class="top_icon" name="wap-home-o" />
            </div>
        </div>
        <!-- 底部弹出动画按钮 -->
        <!-- <div @click="isShow = !isShow" class="bottom_eject">
            <h2>弹出</h2>
        </div> -->
        <!-- <Discount v-show="isShow" tag="div" class="eject_top"></Discount> -->
        <!-- 电影内容 -->
        <div class="movie_content">
            <div class="movie_box">
                <img class="movie_img" :src="item_data.share_data.share_pic" alt="">
                <div class="right_content">
                    <p class="movie_text">{{item_data.share_data.share_title}}</p>
                    <h4 class="movie_price">￥{{item_data.static_data.low_price}}-{{item_data.static_data.high_price}}</h4>
                </div>
            </div>
            <!-- 下方内容 -->
            <div class="bottom_content">
                <p class="set_discount"><van-icon class="yes" name="passed" />套票优惠<van-icon class="question" name="question-o" /></p>
                <div class="show_message">
                    <p class="time_message">{{item_data.static_data.show_time_data.show_time_start_display.split('').splice(0,item_data.static_data.show_time_data.show_time_start_display.length - 6).join('')}} - {{item_data.static_data.show_time_data.show_time_end_display.split('').splice(0,item_data.static_data.show_time_data.show_time_end_display.length - 6).join('')}}<van-icon class="time_detail" name="arrow" /></p>
                    <p class="theatre_message">{{item_data.static_data.city.city_name}} | {{item_data.static_data.venue.venue_name}}</p>
                    <p class="address_message">{{item_data.static_data.venue.venue_address}}</p>
                    <div class="position_box">
                        <van-icon class="position_icon" name="location" />
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import Discount from './discount/Discount'
import {get} from '@/api/http'
export default {
    props : ['item'],
    data(){
        return {
            isShow : true,
            item_data : {},
            url : "",
            start_time : "",
            end_time : "",
        }
    },
    components : {
        Discount,
    },
    methods : {
        async getItem(){
            let rs = await get('/Schedule/Schedule/getScheduleInfo?schedular_id=' + this.getUrl);
            this.item_data = rs.data.data;
        }
    },
    async created(){
        this.getItem();
    },
    computed : { 
        getUrl(){
            // return this.$route.query;
            let strArr = this.$route.query.schedular_url.split('');
            let urlArr = strArr.splice(strArr.length - 6,strArr.length);
            let urlStr = urlArr.join('');
            return urlStr;
        }
    },
    mounted(){
        console.log(this.getUrl);
    }
}
</script>

<style lang="scss" scoped>
// @import '@/assets/style/mixin.scss';
.vague_box{
    width:375px;
    height:218px;
    overflow:hidden;
    border-bottom:1px solid #D8D3D8;
}
    .vague_frame{
        width:100%;
        height:218px;
        // overflow:hidden;
        // border-bottom:1px #000 solid;
        background:url('../../assets/images/detail_img.jpg') no-repeat;
        background-size:375px 100%;
        filter:blur(10px);
        // @include addline(#000);
        
        
    }
.vague_header{
        color:#fff;
        filter:blur(0px);
        position:absolute;
        width:375px;
        top:0;
        left:0;
        display:flex;
        justify-content:space-between;
        align-items: center;
        height:44px;
        .icon_box{
            width:70px;
            padding-right:10px;
            height:44px;
            display:flex;
            justify-content:space-around;
            align-items: center;
            .top_icon{
                font-size:22px;
                margin-left:10px;
            }
        }
        .return_icon{
            font-size:22px;
            margin-left:10px;
        }
        
        h3{
            font-size:18px;
        }
    }
    .eject_top{
        width:375px;
        height:460px;
        background:yellow;
        position:absolute;
        left:0;
        bottom:-100%;
    }
    .movie_content{
        width:345px;
        padding:0 15px;
        position:absolute;
        top:44px;
        left:0;
        .movie_box{
            position:relative;
            margin-top:20px;
            width:345px;
            height:158px;
            .movie_img{
                width:105px;
                height:145px;
            }
            .right_content{
                position:absolute;
                bottom:15px;
                right:0;
                width:226px;
                height:136px;
                color:#fff;
                // background:pink;
                p{
                    font-size:16px;
                }
                h4{
                    position:absolute;
                    bottom:8px;
                    font-size:18px;
                }
            }
        }
        .bottom_content{
            width:345px;
            .set_discount{
                width:80px;
                height:42px;
                color:#666666;
                font-size:12px;
                display:flex;
                justify-content:space-between;
                align-items:center;
                .yes{
                    margin-top:3px;
                }
                .question{
                    margin-top:3px;
                }
            }
            .show_message{
                position:relative;
                width:345px;
                height:110px;
                padding-bottom:22px;
                .time_message{
                    margin-top:18px;
                    .time_detail{
                        height:16px;
                        line-height:16px;
                        font-size:12px;   
                    }
                }
                .theatre_message{
                    margin-top:15px;
                    width:278px;
                    height:40px;
                    margin-right:40px;
                }
                .address_message{
                    margin-top:5px;
                    font-size:10px;
                }
                .position_box{
                    position:absolute;
                    right:20px;
                    bottom:40px;
                    width:40px;
                    height:40px;
                    border-radius:50%;
                    background:#EDEDED;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    .position_icon{
                        color:#FF6842;
                        font-size:22px;
                    }
                }
                
            }
        }
    }
</style>