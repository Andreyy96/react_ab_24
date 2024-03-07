import {useSearchParams} from "react-router-dom";

const usePageQuery = () => {
    const [query, setQuery] = useSearchParams({page: '1'});

    const page = query.get('page');

    return {
        page,
        prevPage: () => {
            setQuery(value => {
                value.set('page', `${+value.get('page') - 1}`)
                return value
            })
        },
        nextPage: () => {
            setQuery(value => {
                value.set('page', `${+value.get('page') + 1}`)
                return value
            })
        }
    }
}

export {
    usePageQuery
}