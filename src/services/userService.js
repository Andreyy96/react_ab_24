import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const userService = {
    getAll:  () => apiService.get(urls.users.link),
    getById: (id) => apiService.get(urls.users.byId(id)),
    getPostsById: (id) => apiService.get(urls.users.postsByUserId(id))
}

export {userService}