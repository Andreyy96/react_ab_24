import css from "./PostDetails.module.css"
const PostDetails = ({postDetails}) => {
    const {userId, id, title, body} = postDetails
    return (
        <div className={css.post_info}>
            <p>userId: {userId}</p>
            <p>id: {id}</p>
            <p>title: {title}</p>
            <p>topic: {body}</p>
        </div>
    );
};

export {PostDetails};
