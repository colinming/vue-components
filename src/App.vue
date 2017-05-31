<template>
    <div id="app">
        <v-header></v-header> <!-- 自定义组件v-header -->

        <div class="tab">
            <!-- vue-router2.x只适用于vue2.x 使用router-link组件来导航 -->
            <div class="tab-item"><router-link="/goods">商品</router-link></div>
            <div class="tab-item"><router-link="/ratings">评价</router-link></div>
            <div class="tab-item"><router-link="/seller">商家</router-link></div>
        </div>
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
    </div>
</template>

<script>
    import header from './components/header/header.vue'; // 引入header组件
    export default {
        components: {
            'v-header': header
        }
    };
</script>

<style lang="scss" rel="stylesheet">
    #app{
        .tab{
            display: flex; /*vue-loader依赖于postcss的插件，会自动根据浏览器类型添加前缀*/
            width:100%;
            height:40px;
            line-height:40px;
            .tab-item{
                flex:1;
                text-align: center;
            }
        }
    }
</style>
