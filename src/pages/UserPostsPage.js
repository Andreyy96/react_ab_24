import {Outlet, useLoaderData} from "react-router-dom";

import {UserPosts} from "../components/PostsContainer/UserPosts/UserPosts";
import css from "./CSSPages/TitleForPage.module.css";

const UserPostsPage = () => {

    const {data} = useLoaderData()

    return (
        <div>
            <h2 className={css.pageTitle}>User Posts</h2>
            <UserPosts posts={data}/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {UserPostsPage};
