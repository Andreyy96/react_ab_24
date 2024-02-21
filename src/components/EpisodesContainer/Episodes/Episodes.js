import {useEffect, useState} from "react";


import {episodeService} from "../../../services";
import {Episode} from "../Episode";
import css from "./Episodes.module.css"
import {usePageQuery} from "../../../hooks";


const Episodes = () => {

    const [episodes, setEpisodes] = useState({prev: null, next: null, results: []})
    const {page, next, prev} = usePageQuery();

    useEffect(() => {
        episodeService.getAll(page).then(({data}) => setEpisodes(() => {
            const {info: {next, prev}, results} = data;
            return {
                next,
                prev,
                results
            }
        }))
    }, [page]);

    return (
        <div>
            <div className={css.episodes_container}>
                {episodes.results.map(episode => <Episode episode={episode} key={episode.id}/>)}
            </div>
            <div className={css.button_container}>
                <button disabled={!episodes.prev} onClick={prev}>prev</button>
                <button disabled={!episodes.next} onClick={next}>next</button>
            </div>
        </div>
    );
};

export {Episodes};
