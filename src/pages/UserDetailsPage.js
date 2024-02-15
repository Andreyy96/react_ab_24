import {Outlet, useLoaderData} from "react-router-dom";

import {UserDetails} from "../components/UsersContainer/UserDetails/UserDetails";
import css from "./CSSPages/TitleForPage.module.css";

const UserDetailsPage = () => {
    const {data} = useLoaderData()

    return (
        <div>
            <h2 className={css.pageTitle}>User Details</h2>
            <UserDetails userDetails={data}/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};
