const baseURL = 'https://jsonplaceholder.typicode.com'

const todos = '/todos'
const albums = '/albums'
const comments = '/comments'
const posts = '/posts'

const urls = {
    todos: {
        link: todos,
        byId: (id) => `${todos}/${id}`
    },
    albums: {
        link: albums,
        byId: (id) => `${albums}/${id}`
    },
    comments: {
        link: comments,
        byId: (id) => `${comments}/${id}`,
    },
    posts: {
        link: posts,
        byId: (id) => `${posts}/${id}`,
    }
}

export {
    baseURL,
    urls
}