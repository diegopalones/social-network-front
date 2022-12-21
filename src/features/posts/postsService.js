import axios from "axios";

const API_URL = "http://localhost:8080";

const getAllPosts = async () => {

const res = await axios.get(API_URL + "/posts");

return res.data;

};

const postsService = {

getAllPosts

};

export default postsService;