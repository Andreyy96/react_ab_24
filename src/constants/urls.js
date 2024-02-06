const baseURL = 'https://jsonplaceholder.typicode.com'

const posts = "/posts"

let urls = {
    posts: {
        link: posts,
        byId: (id) => `${posts}/${id}`
    }
}

export {
    baseURL,
    urls
}