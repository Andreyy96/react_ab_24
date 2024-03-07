import {apiService} from "./apiService";
import {urls} from "../constants";

const episodeService = {
    getAll: (page = "1") => apiService.get(urls.episodes.link, {params: {page}})
}

export {episodeService}