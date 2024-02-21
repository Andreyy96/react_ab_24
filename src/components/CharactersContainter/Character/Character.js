import {useEffect, useState} from "react";

import {characterService} from "../../../services";
import css from "./Character.module.css"

const Character = ({url}) => {

    const [character, setCharacter] = useState({})

    const {id, name, image} = character

    useEffect(() => {
        characterService.getByURL(url).then(({data}) => setCharacter(data))
    }, [url]);

    return (
        <div className={css.character}>
            <p>id: {id}</p>
            <h4>name: {name}</h4>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};
