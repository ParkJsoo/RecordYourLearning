import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from './components/LoginPage.vue';
import MainPage from './components/MainPage.vue';
import BoardHome from './components/board/BoardHome.vue';
import BoardHomework from './components/board/BoardHomework.vue';
import Today from './components/board/date/Today.vue';
import Tomorrow from './components/board/date/Tomorrow.vue';
import ThisWeek from './components/board/date/ThisWeek.vue';
import NextWeek from './components/board/date/NextWeek.vue';
import Month from './components/board/date/Month.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: LoginPage },
        { path: '/main-page/:boardId', component: MainPage,
            children: [
                { path: 'home', name: 'home', component: BoardHome },
                { path: 'homework', name: 'homework', component: BoardHomework },
                { path: 'today', name: 'today', component: Today },
                { path: 'tomorrow', name: 'tomorrow', component: Tomorrow },
                { path: 'this-week', name: 'this-week', component: ThisWeek },
                { path: 'next-week', name: 'next-week', component: NextWeek },
                { path: 'month', name: 'month', component: Month },
            ]
        },
    ],
});