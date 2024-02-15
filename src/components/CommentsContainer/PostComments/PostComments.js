import {PostComment} from "../PostComment/PostComment";
import css from './PostComments.module.css'

const PostComments = ({comments}) => {
    return (
        <div className={css.comments}>
            {comments.map(comment => <PostComment comment={comment} key={comment.id}/>)}
        </div>
    );
};

export {PostComments};
