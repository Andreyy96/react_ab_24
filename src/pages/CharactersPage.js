import {useNavigate} from "react-router-dom";

import {Characters} from "../components";
import css from "./CharactersPage.module.css"

const CharactersPage = () => {

    const navigate = useNavigate()

    return (
        <div>
            <button className={css.button_back} onClick={() => navigate(-1)}>back</button>
            <Characters/>
        </div>
    );
};

export {CharactersPage};
