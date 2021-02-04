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

// 학습 노트 데이터를 조회하는 API
// function fetchToday() {
//     return instance.get('board/home/today')
// }

export { registerUser, loginUser }