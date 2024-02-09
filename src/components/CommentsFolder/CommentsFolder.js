import {useEffect, useState} from "react";

import {commentService} from "../../services/commentService";
import {CommentForm} from "./CommentForm/CommentForm";
import {Comments} from "./Comments/Comments";

const CommentsFolder = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        commentService.geyAll().then(({data}) => setComments(data))
    }, []);

    return (
        <div>
            <CommentForm setComments={setComments}/>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentsFolder};
