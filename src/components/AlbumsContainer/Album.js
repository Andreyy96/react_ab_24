import css from './Album.module.css'
const Album = ({album}) => {

    const {userId, id, title} = album

    return (
        <div className={css.album}>
            <p>userId: {userId}</p>
            <p>id: {id}</p>
            <p>title: {title}</p>
        </div>
    );
};

export {Album};
