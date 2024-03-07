import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {characterActions, episodesActions} from "../../../store";
import css from "./Episode.module.css"



const Episode = ({episode}) => {

    const {id, name, episode: series, characters} = episode
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const goCharacterPage =() => {
        const ids = characters.map(character => character.split("/").slice(-1)[0]).join(",")
        dispatch(episodesActions.setEpisodeName(name))
        dispatch(characterActions.getAllByIds({ids}))
        navigate(`/characters/:${ids}`)

    }

    return (
        <div className={css.episode} onClick={goCharacterPage}>
            <p>id:{id}</p>
            <p>name:{name}</p>
            <p>episode: {series}</p>
        </div>
    );
};

export {Episode}