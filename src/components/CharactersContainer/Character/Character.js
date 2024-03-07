import css from "./Character.module.css"

const Character = ({character}) => {

    const {id, name, image} = character

    return (
        <div className={css.character}>
            <p>{id}</p>
            <p>{name}</p>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character}