import css from './Post.module.css'
const Post = ({post}) => {

    const {userId, id, title, body} = post

    return (
        <div className={css.post}>
            <p>userId: {userId}</p>
            <p>id: {id}</p>
            <p>title: {title}</p>
            <p>body: {body}</p>
        </div>
    );
};

export {Post};
