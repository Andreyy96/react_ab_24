import {Outlet, useLoaderData} from "react-router-dom";

import {PostDetails} from "../components/PostsContainer/PostDetails/PostDetails";
import css from "./CSSPages/TitleForPage.module.css";

const PostDetailsPage = () => {

    const {data} = useLoaderData()

    return (
        <div>
            <h2 className={css.pageTitle}>Post Details</h2>
            <PostDetails post={data}/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {PostDetailsPage};

