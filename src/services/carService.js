import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const carService = {
    getAll: () => axiosService.get(urls.cars.link),
    getById: (id) => axiosService.get(urls.cars.byId(id)),
    postCar: (data) => axiosService.post(urls.cars.link, data),
    updateCar: (id, data) => axiosService.put(urls.cars.byId(id), data),
    deleteCar: (id) => axiosService.delete(urls.cars.byId(id))
}

export {
    carService
}