import axios from 'axios';

const api = axios.create({
    baseURL: 'https://tj51h61lhf.execute-api.us-east-2.amazonaws.com'
})

export default api;