import {useLoaderData} from "react-router-dom";

import {PostComments} from "../components/CommentsContainer/PostComments/PostComments";
import css from "./CSSPages/TitleForPage.module.css";

const PostCommentsPage = () => {

    const {data} = useLoaderData()

    return (
        <div>
            <h2 className={css.pageTitle}>Post Comments</h2>
            <PostComments comments={data}/>
        </div>
    );
};

export {PostCommentsPage};
