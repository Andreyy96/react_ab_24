import {Outlet} from "react-router-dom";

import css from "./MainLayout.module.css"

const MainLayout = () => {

    return (
        <div>
            <h1 className={css.Title}>Rick & Morty</h1>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
