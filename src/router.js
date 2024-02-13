import {createBrowserRouter} from "react-router-dom";

import {MainLayouts} from "./layouts/MainLayouts";
import {TodosPage} from "./pages/TodosPage";
import {AlbumsPage} from "./pages/AlbumsPage";
import {CommentsPage} from "./pages/CommentsPage";
import {PostsPage} from "./pages/PostsPage";

const router = createBrowserRouter([
    {path: '', element: <MainLayouts/>, children: [
            {path: 'todos', element: <TodosPage/>},
            {path: 'albums', element: <AlbumsPage/>},
            {path: 'comments', element: <CommentsPage/>, children: [
                    {path: 'posts', element: <PostsPage/>}
                ]}
        ]}
])

export {
    router
}