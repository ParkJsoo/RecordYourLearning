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
                        <div class="sub_title" >Today</div>
                        <div class="sub_title" >Tomorrow</div>
                        <div class="sub_title" >This Week</div>
                        <div class="sub_title" >Next Week</div>
                        <div class="sub_title" >Month</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mail">
            <i class="fas fa-envelope"></i>jeongsoo0314@naver.com
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
        width: 400px;
        height: 100%;
        background-color: #323232;
    }
    .main-logo {
        width: 180px;
        display: flex;
        margin: 50px auto;
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
    }
    .main-profile > img {
        width: 60px;
        margin-bottom: 10px;
        border-radius: 40px;
    }

    .nav {
        width: 400px;
        box-sizing: border-box;
        padding-left: 50px;
        color: #fff;
        font-size: 20px;
        font-weight: 500;
        background-color: #323232;
    }
    .nav_title {
        padding: 15px 0 15px 20px;
    }
    .sub_title_box {
        width: 80px;
        padding: 10px 0 0 35px;
    }
    .sub_title {
        margin-bottom: 10px;
        color: #A1A1A1;
        font-size: 16px;
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
        animation-duration: 0.3s;
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
        position: relative;
        bottom: -60px;
    }
    .fa-envelope {
        width: 25px;
        height: 25px;
        padding: 5px 0;
        margin-right: 20px;
        background-color: #fff;
        text-align: center;
        border-radius: 15px;
        box-sizing: border-box;
    }
</style>