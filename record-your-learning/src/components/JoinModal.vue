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
                    <div class="modal-body" name="body">
                        <label for="join_name">USER NAME</label><input id="join_name" v-model="join_name" type="text">
                        <label for="join_id">USER ID</label><input id="join_id" v-model="join_id" type="text">
                        <label for="join_pw">USER PASSWORD</label><input id="join_pw" v-model="join_pw" type="password">
                        <label for="join_pw2">USER PASSWORD CHECK</label><input id="join_pw2" v-model="join_pw2" type="password">
                        <label for="join_email">USER E-mail</label><input id="join_email" v-model="join_email" type="email">
                    </div>
                    <div class="modal-footer" name="footer">
                        <button class="signUp-button" @click="$emit('close')">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>signUp-button
    </transition>
</template>

<script>
export default {

}
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
        margin-top: 10px;
        margin-bottom: 10px;
        padding-left: 20px;
        font-size: 20px;
        font-weight: 500;
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