import {apiService} from "./apiService";
import {urls} from "../constants";

const carService = {
    getAll: () => apiService.get(urls.cars.link),
    postCar: (car) => apiService.post(urls.cars.link, car),
    updateCar: (id, car) => apiService.put(urls.cars.byId(id), car),
    deleteCar: (id) => apiService.delete(urls.cars.byId(id))
}

export {carService}