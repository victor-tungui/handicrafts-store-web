import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://products-94a95.firebaseio.com/'
});

export default axiosInstance;