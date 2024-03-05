const baseURL = "http://owu.linkpc.net/carsAPI/v1"

const cars = "/cars"

let urls = {
    cars: {
        link: cars,
        byId: (id) => `${cars}/${id}`
    }
}

export {
    baseURL,
    urls
}