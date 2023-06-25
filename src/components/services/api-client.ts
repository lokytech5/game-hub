import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '695857b65c624c17bc0a87b1ea3f44e4'
    }
})