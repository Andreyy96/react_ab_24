import {Outlet, useLoaderData} from "react-router-dom";

import {Users} from "../components/UsersContainer/Users/Users";
import css from './CSSPages/TitleForPage.module.css'

const UsersPage = () => {

    const {data} = useLoaderData()

    return (
        <div>
            <h2 className={css.pageTitle}>Users of list</h2>
            <Users users={data}/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {UsersPage};
