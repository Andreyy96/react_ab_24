const baseURL = "https://jsonplaceholder.typicode.com"

const users = "/users"

let urls =  {
    users: {
        link: users,
        byId: (id) => `${users}/${id}`
    }
}

export {
    baseURL,
    urls
}