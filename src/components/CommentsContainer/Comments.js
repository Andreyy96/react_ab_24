import {useEffect, useState} from "react";

import {commentService} from "../../services/commentService";
import {Comment} from "./Comment";
import css from './Comments.module.css'


const Comments = () => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        commentService.getAll().then(({data}) => setComments(data))
    }, []);

    return (
        <div className={css.comments}>
            {comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
        </div>
    );
};

export {Comments};
