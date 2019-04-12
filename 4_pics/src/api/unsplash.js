import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: "Client-ID d67ba2608ea826421a2326e4b5ff3e68f72c03b70769b2161de5d9c79500620a"
    }
});