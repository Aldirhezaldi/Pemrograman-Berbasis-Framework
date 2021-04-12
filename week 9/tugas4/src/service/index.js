import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";

// Daftar API - GET
const getNewBlog = () => GetAPI('mahasiswa?_sort=id&_order=desc');

// Daftar API - POST
const postNewBlog = (dataYgDikirim) => PostAPI('mahasiswa', dataYgDikirim);

// Daftar API - DELETE
const deleteNewBlog = (dataYgDiHapus) => DeleteAPI('mahasiswa', dataYgDiHapus);

const API = {
    getNewBlog,
    postNewBlog,
    deleteNewBlog
}

export default API;