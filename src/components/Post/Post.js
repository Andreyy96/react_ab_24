import css from "./Post.module.css"
const Post = ({post, onClickGetInfo}) => {
    let {id, title} = post



    return (
        <div className={css.post}>
            <p>{id}) {title}</p>
            <button onClick={()=>onClickGetInfo(post)}>info User {id}</button>
        </div>
    );
};

export {Post};

