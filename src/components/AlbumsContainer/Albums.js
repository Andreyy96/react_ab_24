import {useEffect, useState} from "react";
import {albumService} from "../../services/albumService";
import {Album} from "./Album";
import css from './Albums.module.css'
const Albums = () => {

    const [albums, setAlbums] = useState([])

    useEffect(() => {
        albumService.getAll().then(({data}) => setAlbums(data))
    }, []);

    return (
        <div className={css.albums}>
            {albums.map(album => <Album album={album} key={album.id}/>)}
        </div>
    );
};

export {Albums};
