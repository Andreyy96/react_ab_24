import {useNavigate} from "react-router-dom";

import css from './Comment.module.css'

const Comment = ({comment}) => {
   const {postId, id, name, email, body} = comment

   const navigate = useNavigate()

    return (
        <div className={css.comment}>
            <p>postId: {postId}</p>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>email: {email}</p>
            <p>body: {body}</p>
            <button  onClick={()=> navigate('posts', {state: {postId}})}>Show post</button>
        </div>
    );
};

export {Comment};
