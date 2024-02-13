import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {Post} from "./Post";
import {postService} from "../../services/postService";
import css from './Posts.module.css'

const Posts = () => {
    const [post, setPost] = useState({})
    const {state:{postId}} = useLocation();

    useEffect(() => {
        postService.getById([postId]).then(({data}) => setPost(data))
    }, [postId]);

    console.log(post)

    return (
        <div className={css.onePost}>
            {post && <Post post={post}/>}
        </div>
    );
};

export {Posts};
