import Vue from 'vue'
import Vuex from 'vuex'
import { getAuthFromCookie, getUserNameFromCookie, getUserIdFromCookie} from '../utils/cookies'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        username: getUserNameFromCookie() || '',
        userid: getUserIdFromCookie() || '',
        token: getAuthFromCookie() || ''
    },
    getters: {
        isLogin(state) {
            return state.username !== ''
        }
    },
    mutations: {
        setUsername(state, username) {
            state.username = username
        },
        setUserid(state, userid) {
            state.userid = userid
        },
        clearUsername(state) {
            state.username = ''
        },
        setToken(state, token) {
            state.token = token
        },
    }
})