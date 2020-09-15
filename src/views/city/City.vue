<template>
<div class="cityContainer" ref="scrollWrapper">
    <div class="container">
        <header>
            <van-icon class="back" @click="backClick()" name="arrow-left" />
            <h3 >城市选择</h3>
        </header>
        <!-- 定位城市· -->
        <div class="city_box ensure_position">
            <h5 id="locate">定位城市</h5>
            <span class="position_city">定位中</span>
        </div>
        <!-- 热门城市 -->
        <div class="city_box hot_city">
            <h5 id="hotcity">热门城市</h5>
            <span>全国</span>
            <span v-for="item in hotCityList" :key="item.id">{{item.name}}</span>
        </div>
        <!-- 所有城市 -->
        <div class="city_box all_city" v-for="item in sortedCityList" :key="item.id">
            <h5 :id="item.id">{{item.id}}</h5>
            <span class="one_city" v-for="a_item in item.list" :key="a_item.id">{{a_item.name}}</span>
        </div>
        
    </div>
    <ul class="letter_index">
        <li @click="goCity('locate')">定位</li>
        <li @click="goCity('hotcity')">热门</li>
        <li @touchmove="move" :ref="item.id" v-for="item in sortedCityList" :key="item.id">{{item.id}}</li>
    </ul>
</div>
    
</template>

<script>
import {get} from '@/api/http'
import BScroll from '@better-scroll/core'
export default {
    data(){
        return{
            hotCityList : [],
            sortedCityList : [],
        }
    },
    async created(){
      await  this.getHotCityList();
      await  this.getSortedCityList();
        this.$nextTick(()=>{
            this.initScroll();
        })
    },
    computed : {
        getLetters(){
            return Object.keys(this.sortedCityList);
        }
    },
    methods : {
        async getHotCityList(){
            let rs = await get('/city/city/getHotCityList');
            this.hotCityList = rs.data.data.hot_city_List;
        },
        async getSortedCityList(){
            let rs = await get('/city/city/getSortedCityList');
            this.sortedCityList = rs.data.data;
            console.log(this.sortedCityList);
        },
        move(event){
            // console.log(event);
            let currentY = event.touches[0].pageY;
            let topA = this.$refs.A[0].getBoundingClientRect().top;
            let letterHeight = this.$refs.Z[0].getBoundingClientRect().height;
            let index = Math.floor((currentY - topA) / letterHeight);
            let letter = this.getLetters[index];
            letter && this.bscroll.scrollToElement(document.querySelector('#' + letter),500);

            
        },
        backClick(){
            this.$router.go(-1);
        },
        initScroll(){
            this.bscroll = new BScroll(this.$refs.scrollWrapper,{
                scrollY : true,
                click : true
            })
        },
        goCity(name){
            this.bscroll.scrollToElement(document.querySelector('#' + name),500);
        },
    }   
}
</script>

<style lang="scss" scoped>
    .cityContainer{
        height:667px;
        overflow:hidden;
    }
    .container{
        background:#F5F5F5;
        header{
            height:44px;
            background:#fff;
            box-sizing:border-box;
            padding:10px 5px 10px 5px;
            color:#3E3E3E;
            .back{
                float:left;
                font-size:24px;
            }
            h3{
                text-align:center;
                font-weight:400;
                font-size:19px
            }
        }
        // 定位中
        .ensure_position{
            padding:13px 38px 0 15px;
            overflow:hidden;
            h5{
               color:#A6A6A6;
                font-size:10px;
                font-weight:100; 
                height:26px;
                line-height:26px;
                margin-bottom:5px;
            }
            .position_city{
                margin-bottom:0;
            }
        }
        // 热门城市
        .hot_city{
            padding:13px 38px 0 15px;
            h5{
                clear:both;
                color:#A6A6A6;
                font-size:10px;
                font-weight:100; 
                height:26px;
                line-height:26px;
                margin-bottom:5px;
            }
            span{
                margin-bottom:0;
            }
        }
        .hot_city::after{
            content:"";
            display:block;
            clear:both;
            height:0;
            overflow:hidden;
            visibility:hidden;
        }
        
        .city_box{
            span{
                float:left;
                color:#636363;
                display:block;
                line-height:35px;
                font-size:13px;
                text-align:center;
                width:100px;
                height:35px;
                border:1px #EFEFEF solid;
                background:#fff;
                border-radius:2px;
                margin:0 5px 7px 0;
            }
        }
        // 全部城市
        .all_city{
            background:#fff;
            h5{
                background:#F5F5F5;
                width:100%;
                clear:both;
                color:#A6A6A6;
                font-size:10px;
                font-weight:100; 
                line-height:26px;
                margin-bottom:5px;
                padding-left:20px;
                box-sizing:border-box;
            }
            .one_city{
                width:318px;
                height:50px;
                border:none;
                border-bottom:1px solid #ECECEC;
                margin:0 38px 0 15px;
            }
        }
        //高度塌陷
        .all_city::after{
            content:"";
            display:block;
            clear:both;
            height:0;
            overflow:hidden;
            visibility:hidden;
        }
        // 右侧字母索引   
    }
    .letter_index{
        position:fixed;
        top:120px;
        color:#8D8D8D;
        font-weight:600;
        right:10px;
        width:24px;
        text-align:center;
        font-size:12px;
        li{
            padding-bottom:3px;
        }
    }
</style>