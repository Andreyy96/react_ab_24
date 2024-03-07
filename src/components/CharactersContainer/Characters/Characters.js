import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {Character} from "../Character";
import css from "./Characters.module.css"

const Characters = () => {

   const  {characters} = useSelector(state => state.characters)
   const navigate = useNavigate()

    return (
        <div>
            <div>
                <button className={css.button_back} onClick={() => navigate(-1)}>back</button>
            </div>
            <div className={css.characters_container}>
                {characters.map(character => <Character character={character} key={character.id}/>)}
            </div>
        </div>
    );
};

export {Characters}