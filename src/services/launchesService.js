import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const launchesService = {
    getAll: () => axiosService(urls.launches.link),
    getById: (id) => axiosService(urls.launches.byId(id))
 }

 export {
    launchesService
 }