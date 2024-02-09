import {Comment} from "../Comment/Comment";

const Comments = ({comments}) => {

    return (
        <div>
            {comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
        </div>
    );
};

export {Comments};
