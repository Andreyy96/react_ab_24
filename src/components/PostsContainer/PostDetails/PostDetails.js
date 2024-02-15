import css from './PostDetails.module.css'

const PostDetails = ({post}) => {

    const {id, userId, title, body} = post;

    return (
        <div className={css.wrapper}>
            <div className={css.details}>
                <p className={css.marginLeft}>id: {id}</p>
                <p className={css.marginLeft}>userId: {userId}</p>
                <h4 className={css.marginLeft}>title: {title}</h4>
                <p className={css.marginLeft}>body: {body}</p>
            </div>
        </div>
    );
};

export {PostDetails};
