<template>
    <div id="side-nav">
        <div class="main-logo">
            <img src="../assets/images/logo/logo.png" />
            <div class="main-logo_title">
                <span>Record</span>
                <span>Your</span>
                <span>Learning</span>
            </div>
        </div>
        <div class="main-profile">
            <span class="notification">1</span>
            <img src="../assets/images/member-jk.jpg">
            <div class="main-userName">JungKook</div>
        </div>
        <div class="nav">
            <div v-bind:class="{ upsideA: isActive1 }"><div class="nav_conA" v-bind:class="{ upsideB: isActive1 }"></div></div>
            <div v-on:mouseover = "isActive1 = true" v-on:mouseout = "isActive1 = false" v-bind:class="{ upsideA: isActive2 }">
                <div @click="goHome" class="nav_home nav_title" v-bind:class="{ overStyle: isActive1, upsideB: isActive2 }">Home</div>
            </div>
            <div v-on:mouseover = "isActive2 = true" v-on:mouseout = "isActive2 = false" v-bind:class="{ upsideA: isActive3, downsideA: isActive1 }">
                <div @click="goHomework" class="nav_homework nav_title" v-bind:class="{ overStyle: isActive2, upsideB: isActive3, downsideB: isActive1 }">Homework</div>
            </div>
            <div v-on:mouseover = "isActive3 = true" v-on:mouseout = "isActive3 = false" v-bind:class="{ downsideA: isActive2 }">
                <div class="nav_date nav_title" v-bind:class="{ overStyle: isActive3, downsideB: isActive2 }">Date</div>
            </div>
            <div v-bind:class="{ downsideA: isActive3 }">
                <div class="nav_conB" v-bind:class="{ downsideB: isActive3 }">
                    <div v-on:mouseover = "isActive3 = true" v-on:mouseout = "isActive3 = false" class="sub_title_box">
                        <router-link to="today" class="sub_title" >Today</router-link>
                        <router-link to="tomorrow" class="sub_title" >Tomorrow</router-link>
                        <router-link to="this-week" class="sub_title" >This Week</router-link>
                        <router-link to="next-week" class="sub_title" >Next Week</router-link>
                        <router-link to="month" class="sub_title" >Month</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="mail">
            <i class="fas fa-envelope"></i>
            <span>jeongsoo0314@naver.com</span>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            isActive1: false,
            isActive2: false,
            isActive3: false,
            isActive4: false,
        }
    },
    created() {
        this.$router.push({ name: 'home'})
    },
    methods: {
        goHome: function() {
            this.$router.push({ name: 'home'})
        },
        goHomework: function() {
            this.$router.push({ name: 'homework'})
        }
    }
}
</script>

<style scoped>
    #side-nav {
        width: 380px;
        height: 100%;
        background-color: #323232;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .main-logo {
        width: 180px;
        display: flex;
        margin: 50px 0 30px 0;
    }
    .main-logo > img {
        margin-right: 10px;
        width: 80px;
        height: 80px;
    }
    .main-logo_title {
        cursor: default;
        width: 80px;
        height: 80x;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        color: white;
        font-size: 1.3rem;
        font-weight: 600;
    }
    .main-profile {
        text-align: center;
        color: #fff;
        font-size: 20px;
        font-weight: 600;
        background-color: #323232;
        position: relative;
    }
    .main-profile > img {
        width: 60px;
        margin-bottom: 10px;
        border-radius: 40px;
        cursor: pointer;
    }
    .notification {
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #24b6ba;
        border-radius: 10px;
        font-size: 15px;
        font-weight: normal;
        position: absolute;
        right: 15px;
        top: 40px;
    }

    .nav {
        width: 100%;
        box-sizing: border-box;
        padding-left: 50px;
        color: #fff;
        font-size: 20px;
        font-weight: 500;
        background-color: #323232;
        margin-bottom: 50px;
    }
    .nav_title {
        padding: 15px 0 15px 20px;
        cursor: default;
    }
    .sub_title_box {
        width: 80px;
        padding: 10px 0 0 35px;
        display: flex;
        flex-direction: column;
    }
    .sub_title {
        margin-bottom: 10px;
        color: #A1A1A1;
        font-size: 16px;
        cursor: default;
    }
    .nav_conA {
        height: 50px;
    }
    .overStyle {
        color: #323232;
        font-size: 20px;
        font-weight: 600;
        background-color: #f3f3f3;
        border-radius: 30px 0 0 30px;
        animation-name: move;
        animation-duration: 0.5s;
        transform-origin: right;
    }
    .upsideA {
        background-color: #f3f3f3;
    }
    .upsideB {
        background-color: #323232;
        border-radius: 0 0 40px 0;
    }
    .downsideA {
        background-color: #f3f3f3;
    }
    .downsideB {
        background-color: #323232;
        border-radius: 0 40px 0 0;
    }

    @keyframes move {
        from {transform: scaleX(0.3);}
        to   {transform: scaleX(1);}
    }
    .mail {
        color: hsl(0, 0%, 63%);
        font-size: 16px;
        text-align: center;
        cursor: pointer;
        margin-bottom: 20px;
    }
    .fa-envelope {
        width: 25px;
        height: 25px;
        padding: 5px 0;
        margin-right: 10px;
        background-color: #fff;
        text-align: center;
        border-radius: 15px;
        box-sizing: border-box;
    }
</style>