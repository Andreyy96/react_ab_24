import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";

import './index.css';
import {router} from "./router";
import {ContextTrigger} from "./hoc";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextTrigger>
        <RouterProvider router={router}/>
    </ContextTrigger>
);
