<template>
    <div class="hot_show_con">
        <div class="hot_show">
            <!-- 上方横条 -->
            <div class="hot_header">
                <span>热门演出</span>
                <span><span>全部 </span><van-icon class="all_icon" name="arrow" /></span>
            </div>
            <!-- 父节点 --><!-- 横向滚动 -->
            <div class="bottom_scroll" ref="scrollChild"> 
                <!-- 唯一子节点 -->
                <div class="scroll_child" :style="{width:getWidth}">
                    <div @click="handleClick(item)" class="hot_show_child" v-for="(item,index) in hotShow" :key="index">
                        <img :src="item.pic" alt="">
                        <h3>{{item.show_name}}</h3>
                    </div>
                </div>
            </div>
        </div>
        <!-- 为你推荐 -->
        <div class="big_recommand">
            <div class="recommand">
                <ul id="left_list" class="left_box list_box">
                    <li class="recommand_box" v-for="item in left_list" :key="item.show_id">
                        <img :src="item.pic" alt="">
                        <h3><div v-if="item.method"><img src="@/assets/images/host.png" alt=""></div> {{item.name}}</h3>
                        <span class="show_date">{{item.show_time_top}}</span>
                        <h5 class="show_price"><span>{{item.min_price}}</span><i> 起</i></h5>
                        <button v-for="(a_item,index) in item.support_desc" :key="index">{{a_item}}</button>
                    </li>
                </ul>
                <ul id="right_list" class="right_box list_box">
                    <li class="recommand_box" v-for="item in right_list" :key="item.show_id">
                        <img :src="item.pic" alt="">
                        <h3><div v-if="item.method"><img src="@/assets/images/host.png" alt=""></div> {{item.name}}</h3>
                        <span class="show_date">{{item.show_time_top}}</span>
                        <h5 class="show_price"><span>{{item.min_price}}</span><i> 起</i></h5>
                        <button v-for="(a_item,index) in item.support_desc" :key="index">{{a_item}}</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {get} from '@/api/http'
import BScroll from '@better-scroll/core'
export default {
    data(){
        return {
            hotShow : [],   //热门演出
            //左侧推荐
            left_list : [],
            right_list : [],
        }
    },
    computed : {
        getWidth(){
            return 28.8 * this.hotShow.length + 'vw';
        },
    },
    async created(){
        await this.getHotShow();
        await this.getShowList();
        this.$nextTick(()=>{
            this.initScroll();
        })
    },
    methods : {
        getHeight(ele){
            return document.querySelector(ele).getBoundingClientRect().height;
        },
        async getHotShow(){
            let rs = await get('/home/index/getHotsRecommendList');
            this.hotShow = rs.data.data.hots_show_list.slice(0,5);
            console.log(this.hotShow);
        },
        initScroll(){
            this.bscroll = new BScroll(this.$refs.scrollChild,{
                click : true,
                scrollX : true,
                probeType : 3,
            })
        },
        async getShowList(){
            let rs = await get('/Show/Search/getShowList');
            let list = rs.data.data.list;
            let i = 0;
            list.forEach((value)=>{
                if(i % 2 === 0){
                    this.left_list.push(value);
                }else{
                    this.right_list.push(value);
                }
                i ++;
            })
        },
        //点击跳转详情页
        handleClick(item){
            this.$router.push({path : '/detail',query : item});
        }
    }
}
</script>

<style lang="scss" scoped>
    .hot_show_con{
        width:345px;
    }
    .hot_show{
        width:375px;
        padding:15px;
        box-sizing:border-box;

        .hot_header{
            width:345px;
            height:23px;
            line-height:23px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            margin-bottom:15px;
            span:first-child{
                font-size:18px;
                font-weight:900;
            }
            span:last-child{
                font-size:12px;
                height:23px;
                line-height:23px;
                color:#717171;
                display:flex;
                justify-content:space-between;
                align-items:center;
                span{
                    font-size:12px;
                    color:#717171;
                    font-weight:300;
                }
            }
        }
        // 内部滚动
        .bottom_scroll{
            width:345px;
            box-sizing:border-box;
            padding-right:15px;
            height:190px;
            overflow:hidden;
            .scroll_child{//唯一节点
                width:2000px;
                height:190px;
                .hot_show_child{
                    padding-right:8px;
                    float:left;
                    width:100px;
                    img{
                        width:100px;
                        border-radius:3px;
                    }
                    h3{
                        font-weight:500;
                        width:100px;
                        font-size:14px;
                        overflow:hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                    }
                }
            }
            
        }
    }
    // 为你推荐
    .recommand{
        width:345px;
        padding:10px 15px;
        background:#FAFAFA;
        height:500px;
        .left_box{
            margin-right:5px;
        }
        .list_box{
            width:170px;
            float:left;
            .recommand_box{
                margin-bottom:5px;
                width:170px;
                // display:flex;
                // flex-direction:column;
                border-radius:4px;
                border:1px #ECECEC solid;
                img{
                    border-radius:4px;
                    width:170px;
                    height:232px;
                }
                h3{
                    div{
                        display:inline-block;
                        position:relative;
                        height:20px;
                        width:34px;
                        line-height:20px;
                        img{
                            position:absolute;
                            top:7px;
                            width:33px;
                            height:17px;
                        } 
                    }
                    
                    padding-left:10px;
                    margin:3px 0;
                    font-size:14px;
                    color:#464646;
                    font-weight:500;
                    text-overflow:ellipsis;
                    overflow:hidden;
                    white-space: nowrap;
                }
                .show_date{
                    padding-left:10px;
                    margin:3px 0;
                    font-size:10px;
                    color:#666666;
                    
                }
                .show_price{
                    padding-left:10px;
                    margin:4px 0;
                    span{
                        color:#FF6743;
                        font-weight:300;
                        font-size:16px;
                    }
                    i{
                        font-style:normal;
                        color:#666666;
                        font-size:10px;
                        font-weight:500;
                    }
                }
                button{
                    background:#FFF1EF;
                    display:inline-block;
                    // padding-top:2px;
                    padding:0 4px;
                    height:20px;
                    color:#FF6743;
                    font-size:8px;
                    border:none;
                    margin-left:10px;
                    margin-bottom:5px;
                    border-radius:8px;
                }
            }
            // <li class="recommand_box">
            //     <img src="@/assets/images/left_child.jpg" alt="">
            //     <h3><span>oo</span> 啦啦啦拉拉阿拉啦啦啦啦啊</h3>
            //     <span>2020.12.23-12.26</span>
            //     <h5><span>￥100</span><i>起</i></h5>
            //     <div>套票</div>
            // </li>
        }
    }
</style>