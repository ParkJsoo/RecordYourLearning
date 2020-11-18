<template>
    <div id="login_page">
        <div class="login-left">
            <div class="login-logo">
                <img src="../assets/images/logo/logo_white.png" />
                <div class="login-logo_title">
                    <span>Record</span>
                    <span>Your</span>
                    <span>Learning</span>
                </div>
            </div>
            <div class="login-welcome">
                <p>Welcome!</p>
                <p>Do it login,</p>
                <p>Recording Your Learning :)</p>
            </div>
        </div>
        <div class="login-right">
            <div class="loginBox">
                <div class="loginBox_title">Sign In</div>
                <div class="login_info">
                    <label for="user_id">USER ID</label><input id="user_id" v-model="user_id" type="text">
                    <label for="user_pw">USER PASSWORD</label><input id="user_pw" v-model="user_pw" type="password">
                </div>
                <router-link to="/" class="find_user_info">Forgot your ID/PW?</router-link>
                <div class="loginBox_button">
                    <button type="button" @click="login">Sign in</button>
                    <button type="button" id="show-modal" @click="showModal = true">Sign up</button>
                    <join-modal v-if="showModal" @close="showModal = false">
                        
                    </join-modal>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import JoinModal from './JoinModal.vue'

export default {
    data: function() {
        return {
            showModal: false
        }
    },
    components: {
        'JoinModal': JoinModal
    },
    methods: {
        login : function() {
            this.$router.push('/main-page/board')
        }
    }
}
</script>

<style scoped>
    #login_page {
        width: 100%;
        height: 100%;
        background: linear-gradient(to top left, #DDE1E0 0%, #EEF0EF 50%, #3ecace 50%, #29bdc1 75%, #07a8ac 100%);
        display: flex;
    }
    .login-left {
        width: 50%;
        padding: 90px 0 0 90px;
        box-sizing: border-box;
    }
    .login-logo {
        display: flex;
    }
    .login-logo > img {
        margin-right: 15px;
        width: 8rem;
    }
    .login-logo_title {
        cursor: default;
        height: 128px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: white;
        font-size: 2.5rem;
        font-weight: 600;
    }
    .login-welcome {
        margin-top: 50px;
        cursor: default;
        color: white;
        font-size: 2rem;
        font-weight: normal;
        line-height: 1.33;
    }
    .login-welcome :nth-child(1) {
        margin-bottom: 20px;
        font-size: 3rem;
        font-weight: 600;
    }
    .login-right {
        box-sizing: border-box;
        width: 50%;
        display: flex;
        align-items: center;
    }
    .loginBox {
        width: 500px;
        height: 600px;
        padding: 50px 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 25px;
        box-shadow: 0 11px 6px 0 rgba(0, 0, 0, 0.16);
        background-color: #ffffff;
    }
    .loginBox_title {
        color: #30c1c5;
        font-size: 40px;
        font-weight: 600;
    }
    .login_info {
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .login_info > label {
        color: #9b9b9b;
        font-size: 18px;
        font-weight: 600;
    }
    .login_info > input {
        width: 300px;
        height: 50px;
        padding-left: 20px;
        font-size: 20px;
        font-weight: 500;
        border-radius: 35px;
        border: solid 1px #dbdbdb;
        background-color: #f9f9f9;
    }
    .login_info > input:hover {
        border: solid 1px #38c3c7;
    }
    .find_user_info {
        color: #505050;
        font-size: 24px;
        font-weight: 500;
    }
    .loginBox_button {
        width: 320px;
        display: flex;
        justify-content: space-between;
    }
    .loginBox_button > button {
        cursor: pointer;
        color: white;
        font-size: 20px;
        font-weight: 500;
        width: 150px;
        height: 45px;
        border: none;
        border-radius: 27px;
        background-color: #30c1c5;
    }
</style>