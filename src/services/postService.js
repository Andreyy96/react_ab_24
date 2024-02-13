import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postService = {
    getAll: () => apiService.get(urls.posts.link),
    getById: (id) => apiService.get(urls.posts.byId(id))
}

export {
    postService
}