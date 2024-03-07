import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {usePageQuery} from "../../../hooks";
import {Episode} from "../Episode";
import {episodesActions} from "../../../store";
import css from "./Episodes.module.css"

const Episodes = () => {

    const {episodes, prev, next} = useSelector(state => state.episodes)
    const {page, nextPage, prevPage} = usePageQuery()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(episodesActions.getAll({page}))
    }, [dispatch, page]);

    return (
        <div>
            <div className={css.episodes_container}>
                {episodes.map(episode => <Episode episode={episode} key={episode.id}/>)}
            </div>
            <div className={css.button_container}>
                <button disabled={!prev} onClick={prevPage}>prev</button>
                <button disabled={!next} onClick={nextPage}>next</button>
            </div>
        </div>
    );
};

export {Episodes}