import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const userService = {
    getAll: () => axiosService.get(urls.users.link),
    getById: (id) => axiosService.get(urls.users.byId(id)),
    postUser: (data) => axiosService.post(urls.users.link, data)
}

export {
    userService
}