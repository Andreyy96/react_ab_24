import {apiService} from "./apiService";
import {urls} from "../constants";

const characterService = {
    getAll: () => apiService.get(urls.characters.link),
    getById: (id) => apiService.get(urls.characters.byId(id)),
    getByURL: (url) => apiService.get(urls.characters.byURL(url)),
    getByIds: (ids) => apiService.get(urls.characters.byIds(ids))
}

export {characterService}