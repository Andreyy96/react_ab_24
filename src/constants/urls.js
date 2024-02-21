const baseURL = "https://rickandmortyapi.com/api"

const episodes = "/episode"
const characters = "/character"

const urls = {
    episodes: {
        link: episodes,
        byId: (id) => `${episodes}/${id}`,
    },
    characters: {
        link: characters,
        byId: (id) => `${characters}/${id}`,
        byURL: (url) => url
    }
}

export {
    baseURL,
    urls
}