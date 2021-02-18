import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: () => import('./components/LoginPage.vue')},
        { path: '/main-page/:boardId', component: () => import('./components/MainPage.vue'),
            children: [
                { path: 'home', name: 'home', component: () => import('./components/board/BoardHome.vue')},
                { path: 'homework', name: 'homework', component: () => import('./components/board/BoardHomework.vue')},
                { path: 'today', name: 'today', component: () => import('./components/board/date/Today.vue')},
                { path: 'tomorrow', name: 'tomorrow', component: () => import('./components/board/date/Tomorrow.vue')},
                { path: 'this-week', name: 'this-week', component: () => import('./components/board/date/ThisWeek.vue')},
                { path: 'next-week', name: 'next-week', component: () => import('./components/board/date/NextWeek.vue')},
                { path: 'month', name: 'month', component: () => import('./components/board/date/Month.vue')},
            ]
        },
        { path: '*', component: () => import('./components/NotFound.vue')}
    ],
});