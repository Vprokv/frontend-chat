import {axios} from '../../core';

export default {
    signIn: (postData) => axios.post("/user/signIn", postData),
    signUp: (postData) => axios.post("/user/signUp", postData),
    verifyHash: hash => axios.get("/user/verify?hash=" + hash),
    getMe: () => axios.get("/user/me"),
    findUsers: (query)=> axios.get("user/find?=" + query)
};