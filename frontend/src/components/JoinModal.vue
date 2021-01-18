<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <button class="modal-default-button" @click="$emit('close')">
                    X
                </button>
                <div class="modal-container">
                    <div class="modal-header">
                        <div name="header">
                            Sign Up
                        </div>
                    </div>
                    <form @submit.prevent="submitJoin">
                        <div class="modal-body" name="body">
                            <label for="join_name">USER NAME</label><input id="join_name" v-model="userData.user_name" type="text">
                            <label for="join_email">USER E-MAIL</label><input id="join_email" v-model="userData.user_email" type="email">
                            <label for="join_pw">USER PASSWORD</label><input id="join_pw" @keyup="isPasswordValid" v-model="userData.user_pw" type="password">
                            <label for="join_pw2">USER PASSWORD CHECK</label><input id="join_pw2" @keyup="isPasswordValid" v-model="userData.user_pw2" type="password">
                            <div>{{ message }}</div>
                            <!-- <div v-if="formCheck">비밀번호가 일치합니다.</div> -->
                            <!-- <div v-else>비밀번호가 일치하지 않습니다.</div> -->
                        </div>
                        <div class="modal-footer" name="footer">
                            <button :disabled="!isEmailValid || !checked" class="signUp-button" type="submit">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>signUp-button
    </transition>
</template>

<script>
import { validateEmail } from '../utils/validation'

export default {
    data() {
        return {
            userData : {
                user_name : '',
                user_email : '',
                user_pw : '',
                user_pw2 : ''
            },
            message: '',
            checked: false
        }
    },
    computed: {
        isEmailValid() {
            return validateEmail(this.userData.user_email)
        }
    },
    methods : {
        isPasswordValid: function() {
            if(this.userData.user_pw.length < 8) {
                this.message = '비밀번호 길이는 8자 이상이어야 합니다.'
            }
            else if(!this.userData.user_pw.match(/([a-zA-Z].*[0-9])|([0-9].*[a-zA-Z])/)) {
                this.message = '비밀번호는 영문자,숫자,특수문자의 조합이어야 합니다.'
            }
            else if(this.userData.user_pw.length > 12) {
                this.message = '비밀번호 길이는 12자 이하여야 합니다.'
            }
            else if(this.userData.user_pw != this.userData.user_pw2) {
                this.message = '비밀번호가 일치하지 않습니다.'
            }
            else if(this.userData.user_pw == this.userData.user_pw2) {
                this.message = '비밀번호가 일치합니다.'
                this.checked = true
            }
            else {
                this.message = ''
            }
        },
        submitJoin: function (event) { // eslint-disable-line no-unused-vars
            this.$http.post('/api/join', { 
            userData: this.userData
            })
            .then((res) => {
                if (res.data.success == true) {
                    alert(res.data.message);
                    this.$router.go(this.$router.currentRoute);
                }
                if (res.data.success == false) {
                    alert(res.data.message);
                }
            })
            .catch(function (error) { // eslint-disable-line no-unused-vars
                alert('error')
            })
        }
    }
};
</script>

<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        text-align: center;
        vertical-align: middle;
    }

    .modal-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 400px;
        height: 600px;
        margin: 0px auto;
        padding: 20px 50px;
        background-color: #fff;
        border-radius: 22px;
        transition: all .3s ease;
    }

    .modal-header {
        color: #30c1c5;
        font-size: 30px;
        font-weight: 600;
    }

    .modal-body {
        height: 480px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
    }

    .modal-body > label {
        margin-top: 10px;
        color: #9b9b9b;
        font-size: 18px;
        font-weight: 600;
    }
    .modal-body > input {
        margin: 10px 0;
        padding-left: 20px;
        font-size: 20px;
        font-weight: 500;
        color: #323232;
        width: 300px;
        height: 50px;
        border-radius: 35px;
        border: solid 1px #c1c1c1;
        background-color: #f9f9f9;
    }
    .modal-body > input:hover {
        border: solid 1px #38c3c7;
    }

    .modal-default-button {
        width: 500px;
        cursor: pointer;
        color: white;
        font-size: 30px;
        font-weight: 500;
        text-align: end;
        border: none;
        background: none;
    }

    .signUp-button {
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

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>