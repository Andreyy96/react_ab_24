import {UserPost} from "../UserPost/UserPost";
import css from './UserPosts.module.css'

const UserPosts = ({posts}) => {

    return (
        <div className={css.userPosts}>
            {posts.map(post => <UserPost post={post} key={post.id}/>)}
        </div>
    );
};

export {UserPosts};
