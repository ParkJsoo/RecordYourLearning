import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from './components/LoginPage.vue';
import MainPage from './components/MainPage.vue';
import BoardHome from './components/board/BoardHome.vue';
import BoardHomework from './components/board/BoardHomework.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: LoginPage },
        { path: '/main-page/:boardId', component: MainPage,
            children: [
                { path: 'home', name: 'home', component: BoardHome },
                { path: 'homework', name: 'homework', component: BoardHomework },
            ]
        },
    ],
});