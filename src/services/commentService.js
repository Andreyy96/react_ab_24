import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const commentService = {
    getAll: () => apiService.get(urls.comments.link),
    getById: (id) => apiService.get(urls.comments.byId(id)),
}

export {
    commentService
}