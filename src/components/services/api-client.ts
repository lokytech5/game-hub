import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0e9e7d985d7f43eb8bc72cdeafa92257'
    }
})