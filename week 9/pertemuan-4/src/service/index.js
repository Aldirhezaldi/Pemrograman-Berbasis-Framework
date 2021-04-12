import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";

// Daftar API - GET
const getNewBlog = () => GetAPI('posts?_sort=id&_order=desc');

// Daftar API - POST
const postNewBlog = (dataYgDikirim) => PostAPI('posts', dataYgDikirim);

// Daftar API - DELETE
const deleteNewBlog = (dataYgDiHapus) => DeleteAPI('posts', dataYgDiHapus);

const API = {
    getNewBlog,
    postNewBlog,
    deleteNewBlog
}

export default API;