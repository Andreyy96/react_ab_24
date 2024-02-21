import {Character} from "../Character";
import css from "./Characters.module.css"

const Characters = () => {

    const data = JSON.parse(localStorage.getItem('item'))

    localStorage.removeItem("item")


    return (
        <div className={css.characters_container}>
            {data.map((url, index) => <Character url={url} key={index}/>)}
        </div>
    );
};

export {Characters};
