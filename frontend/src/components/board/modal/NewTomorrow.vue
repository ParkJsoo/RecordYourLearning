<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <button class="modal-default-button" @click="$emit('close-new')">
                    X
                </button>
                <div class="modal-container">
                    <div class="modal-header">
                        <div name="header">
                            Tomorrow
                        </div>
                    </div>
                    <div class="modal-body" name="body">
                        <label for="tomorrow_title">Title</label>
                        <input class="tomorrowInput" id="tomorrow_title" v-model="tomorrow_title" type="text">
                        <label for="tomorrow_time1">Time</label>
                        <div>
                            <input class="tomorrowInput inputHalf" id="tomorrow_time1" v-model="tomorrow_time1" type="time"> ~
                            <input class="tomorrowInput inputHalf" id="tomorrow_time2" v-model="tomorrow_time2" type="time">
                        </div>
                        <label for="category">Category</label>
                        <input class="tomorrowInput inputHalf" id="category" v-model="category" type="text">
                        <label for="contents">Contents</label><textarea id="contents" v-model="contents"></textarea>
                    </div>
                    <div class="modal-footer" name="footer">
                        <button class="edit-button" @click="$emit('close-new')">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </div>
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
        width: 500px;
        height: 550px;
        margin: 0px auto;
        padding: 20px 50px;
        background-color: #fff;
        border-radius: 22px;
        transition: all .3s ease;
    }

    .modal-header {
        color: #30c1c5;
        font-size: 28px;
        font-weight: 600;
    }

    .modal-body {
        height: 450px;
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
    .tomorrowInput {
        margin: 10px 0;
        padding-left: 20px;
        font-size: 15px;
        font-weight: normal;
        color: #323232;
        width: 450px;
        height: 30px;
        border-radius: 35px;
        border: solid 1px #c1c1c1;
        background-color: #f9f9f9;
    }
    .modal-body > input:hover {
        border: solid 1px #38c3c7;
    }
    .inputHalf  {
        width: 200px;
        padding-right: 10px;
    }
    #contents {
        width: 450px;
        height: 150px;
        resize: none;
        margin: 10px 0;
        padding: 15px;
        border-radius: 10px;
        border: solid 1px #c1c1c1;
        background-color: #f9f9f9;
        font-size: 12px;
        font-weight: normal;
        color: #323232;
    }

    .modal-default-button {
        width: 600px;
        cursor: pointer;
        color: white;
        font-size: 30px;
        font-weight: 500;
        text-align: end;
        border: none;
        background: none;
    }

    .edit-button {
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