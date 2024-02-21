import {useContext, useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {episodeService} from "../../../services";
import {Context} from "../../../hoc";
import {Episode} from "../Episode";
import css from "./Episodes.module.css"


const Episodes = () => {

    const [episodes, setEpisodes] = useState([])
    const [query, setQuery] = useSearchParams({page: "1"})
    const [page, setPage] = useState({prev: null, next: null})
    const {trigger} = useContext(Context);


    useEffect( () => {
        episodeService.getAll(query.get('page')).then(({data}) => {
            setEpisodes(data.results)
            setPage({prev: data.info.prev, next: data.info.next})
        })
    }, [trigger, query]);


    const prev = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') - 1}`)
            return prev
        })
    }

    const next = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') + 1}`)
            return prev
        })
    }


    return (
        <div>
            <div className={css.episodes_container}>
                {episodes.map(episode => <Episode episode={episode} key={episode.id}/>)}
            </div>
            <div className={css.button_container}>
                <button disabled={!page.prev} onClick={prev}>prev</button>
                <button disabled={!page.next} onClick={next}>next</button>
            </div>
        </div>
    );
};

export {Episodes};
