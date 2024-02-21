import {useNavigate} from "react-router-dom";

import css from "./Episode.module.css"

const Episode = ({episode}) => {

    const {id, name, characters, episode: series, } = episode

    const navigate = useNavigate()

    const shareCharacter = () => {
        localStorage.setItem("item", JSON.stringify(characters))
        navigate("/characters")

    }

    return (
            <div className={css.episode}>
                <p>id: {id}</p>
                <h4>name:{name}</h4>
                <p>episode: {series}</p>
                <button onClick={shareCharacter}>show characters</button>
            </div>
    );
};

export {Episode};
