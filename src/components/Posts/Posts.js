import {useEffect, useState} from "react";
import {Post} from "../Post/Post";
import {postService} from "../../services/postService";
import {PostDetails} from "../PostDetails/PostDetails";
import css from "./Posts.module.css"

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [postDetails, setPostDetails] = useState(null)

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, []);



    let onClickGetInfo = (post) => {
        setPostDetails(post)
    }


    return (
        <div className={css.wrapper}>
            {posts.map(post =><Post post={post} key={post.id} onClickGetInfo={onClickGetInfo}/>)}
            {postDetails && <PostDetails postDetails={postDetails}/>}
        </div>
    );
};

export {Posts};
