import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const albumService = {
    getAll: () => apiService.get(urls.albums.link),
    getById: (id) => apiService.get(urls.albums.byId(id))
}

export {
    albumService
}