import {urls} from "../constants/urls";
import {axiosService} from "./axiosService";

const commentService ={
    geyAll: () => axiosService(urls.comments.link),
    getById: (id) => axiosService(urls.comments.byId(id)),
    postComment: (data) => axiosService.post(urls.comments.link, data)
}

export {
    commentService
}