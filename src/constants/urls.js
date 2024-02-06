const baseURL = "https://api.spacexdata.com/v3/"

const launches = "launches/"

let urls = {
    launches: {
        link: launches,
        byId: (flight_number) => `${launches}/${flight_number}`
    }
}

export {
    baseURL,
    urls
}