import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-2b1f1.firebaseio.com/'
});

export default instance;