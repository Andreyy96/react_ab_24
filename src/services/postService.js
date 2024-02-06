import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postService = {
    getAll: () => axiosService(urls.posts.link),
    getById: (id) => axiosService(urls.posts.byId(id))
}

export {
    postService
}