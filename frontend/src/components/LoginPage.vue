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
                        <label for="user_email">USER E-MAIL</label>
                        <input id="user_email" v-model="loginData.user_email" type="text">
                        <label for="user_pw">USER PASSWORD</label>
                        <input id="user_pw" v-model="loginData.user_pw" type="password">
                    </div>
                    <router-link to="/" class="find_user_info">Forgot your Password?</router-link>
                    <div class="loginBox_button">
                        <button type="submit" :disabled="!isEmailValid" @click.prevent="submitLogin">Sign in</button>
                        <button id="show-join" @click="showJoin = true">Sign up</button>
                    </div>
                <join-modal v-if="showJoin" @close="showJoin = false">
                </join-modal>
            </div>
        </div>
    </div>
</template>

<script>
import JoinModal from './JoinModal.vue'
import { loginUser } from '../api/index'
import { validateEmail } from '../utils/validation'
import { saveAuthToCookie, saveUserNameToCookie, saveUserIdToCookie } from '../utils/cookies'

export default {
    data: function() {
        return {
            loginData: {
                user_email : '',
                user_pw : ''
            },
            showJoin: false
        }
    },
    components: {
        'JoinModal': JoinModal
    },
    computed: {
        isEmailValid() {
            return validateEmail(this.loginData.user_email)
        }
    },
    methods: {
        submitLogin: function (event) { // eslint-disable-line no-unused-vars
            loginUser({ 
                loginData: this.loginData}
            )
            .then((res) => {
                if (res.data.success == true) {
                    this.$store.commit('setToken', res.data.token)
                    this.$store.commit('setUsername', res.data.user_name)
                    this.$store.commit('setUserid', res.data.user_id)
                    saveAuthToCookie(res.data.token)
                    saveUserNameToCookie(res.data.user_name)
                    saveUserIdToCookie(res.data.user_id)
                    this.$router.push('/main-page/board/home')
                }
                if (res.data.success == false) {
                    alert(res.data.message);
                }
            })
            .catch(function (error) { // eslint-disable-line no-unused-vars
                alert(error.message)
            })
        }
    }
}
</script>

<style scoped>
    #login_page {
        width: 100%;
        height: 100%;
        min-width: 1100px;
        min-height: 700px;
        background: linear-gradient(to top left, #DDE1E0 0%, #EEF0EF 50%, #3ecace 50%, #29bdc1 75%, #07a8ac 100%);
        display: flex;
    }
    .login-left {
        width: 50%;
        padding: 3% 0 0 5%;
        box-sizing: border-box;
    }
    .login-logo {
        display: flex;
        align-items: center;
        height: 15%;
    }
    .login-logo > img {
        margin-right: 15px;
        height: 7rem;
    }
    .login-logo_title {
        cursor: default;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: white;
        font-size: 2.2rem;
        font-weight: 600;
    }
    .login-welcome {
        width: 70%;
        height: 50%;
        margin-top: 10%;
        cursor: default;
        color: white;
        font-size: 2.7em;
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
        width: 50%;
        height: 60%;
        min-width: 400px;
        min-height: 600px;
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
        font-size: 3rem;
        font-weight: 600;
    }
    .login_info {
        width: 70%;
        height: 230px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .login_info > label {
        color: #9b9b9b;
        font-size: 1.3em;
        font-weight: 600;
    }
    .login_info > input {
        width: 100%;
        height: 50px;
        padding-left: 20px;
        font-size: 20px;
        font-weight: 500;
        color: #323232;
        border-radius: 35px;
        border: solid 1px #dbdbdb;
        background-color: #f9f9f9;
        box-sizing: border-box;
    }
    .login_info > input:hover {
        border: solid 1px #38c3c7;
    }
    .find_user_info {
        color: #505050;
        font-size: 1.5em;
        font-weight: 500;
    }
    .loginBox_button {
        width: 70%;
        min-width: 280px;
        display: flex;
        justify-content: space-around;
    }
    .loginBox_button > button {
        cursor: pointer;
        color: white;
        font-size: 20px;
        font-weight: 500;
        width: 6vw;
        height: 45px;
        min-width: 120px;
        border: none;
        border-radius: 27px;
        background-color: #30c1c5;
    }
</style>