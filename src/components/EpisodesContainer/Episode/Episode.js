import {useNavigate} from "react-router-dom";

import css from "./Episode.module.css"
import {useAppContext} from "../../../hoc";

const Episode = ({episode}) => {

    const {id, name, episode: series, characters} = episode;
    const navigate = useNavigate();
    const [, setName] = useAppContext();

    const shareCharacter = () => {
        // localStorage.setItem("item", JSON.stringify(characters))
        // navigate("/characters")

        const ids = characters.map(character => character.split('/').slice(-1)[0]).join(',');
        setName(name)
        navigate(`/characters/${ids}`)

    }

    return (
            <div className={css.episode} onClick={shareCharacter}>
                <p>id: {id}</p>
                <h4>name:{name}</h4>
                <p>episode: {series}</p>
                {/*<button onClick={shareCharacter}>show characters</button>*/}
            </div>
    );
};

export {Episode};
