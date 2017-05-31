// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';

// Vue.config.productionTip = false;

Vue.use(VueRouter); // 安装VueRouter

const goods = {template: '<div>this is goods page!!</div>'};
const ratings = {template: '<div>this is ratings page!!</div>'};
const seller = {template: '<div>this is seller page!</div>'};

// 定义路由
const routes = [
    {path: '/goods', components: goods},
    {path: '/ratings', components: ratings},
    {path: 'seller', components: seller}
];

const router = new VueRouter({
    routes
});

new Vue({
    router
}).$mount('#app');
console.log(App);
