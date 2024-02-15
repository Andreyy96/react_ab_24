const baseURL = 'https://jsonplaceholder.typicode.com'

const users= '/users'
const posts = '/posts'

const urls = {
    users: {
        link: users,
        byId: (id) => `${users}/${id}`,
        postsByUserId: (id) => `${users}/${id}/posts`
    },
    posts: {
        link: posts,
        byId: (id) => `${posts}/${id}`,
        commentsByPostId: (id) => `${posts}/${id}/comments`
    }
}

export {
    baseURL,
    urls
}