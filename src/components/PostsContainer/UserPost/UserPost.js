import {useNavigate} from "react-router-dom";

import  css from './UserPost.module.css'

const UserPost = ({post}) => {

    const {id, title} = post

    const navigate = useNavigate()

    return (
        <div className={css.userPost}>
            <h5>{title}</h5>
            <button onClick={() => navigate('/posts/'+ id.toString() + '/comments', {state: {id}})}>show post details</button>
        </div>
    );
};

export {UserPost};
