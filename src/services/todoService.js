import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const todoService = {
    getAll: () => apiService.get(urls.todos.link),
    getById: (id) => apiService.get(urls.todos.byId(id))
}

export {
    todoService
}