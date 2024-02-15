import css from './PostComment.module.css'

const PostComment = ({comment}) => {

    const {postId, id, name, email, body} = comment

    return (
        <div className={css.comment}>
            <p>postId: {postId} id: {id}</p>
            <p>name: {name}</p>
            <p>email: {email}</p>
            <p>body: {body}</p>
        </div>
    );
};

export {PostComment};
