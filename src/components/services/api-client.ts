import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0a9bcef3ab6c437988ee763b26ff6281'
    }
})