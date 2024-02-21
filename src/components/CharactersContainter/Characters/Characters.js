import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {useAppContext} from "../../../hoc";
import {Character} from "../Character";
import css from "./Characters.module.css"
import {characterService} from "../../../services";

const Characters = () => {
    // const data = JSON.parse(localStorage.getItem('item'))
    // localStorage.removeItem("item")

    const [characters, setCharacters] = useState([])
    const {ids} = useParams();
    const navigate = useNavigate();
    const [, setName] = useAppContext();

    useEffect(() => {
        characterService.getByIds(ids).then(({data}) => setCharacters(data))
    }, [ids]);

    const back = () => {
        navigate(-1)
        setName(null)
    }

    return (
        <div>
            <div>
                <button className={css.button_back} onClick={back}>back</button>
            </div>
            <div  className={css.characters_container}>
            {characters.map(character => <Character character={character} key={character.id}/>)}
            </div>
        </div>
    );
};

export {Characters};
