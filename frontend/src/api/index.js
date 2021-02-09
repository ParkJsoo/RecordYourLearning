import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// axios 초기화 함수
function createInstance() {
    const instance = axios.create({
        baseURL: 'api/',
    });
    return setInterceptors(instance);
}
const instance = createInstance();

// 회원가입 API
function registerUser(joinData) {
    return instance.post('join', joinData);
}

// 로그인 API
function loginUser(loginData) {
    return instance.post('login', loginData);
}

// homework에 새글 게시하는 API
function writeHomework(homeworkItem) {
    return instance.post('homework/write', homeworkItem)
}

export { registerUser, loginUser, writeHomework }