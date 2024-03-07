import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

import {Header} from "../components/Header";

const MainLayout = () => {

    const {loading} = useSelector(state => state.episodes)

    return (
        <div>
            <Header/>
            {loading && <h1>Loading</h1>}
            <Outlet/>
        </div>
    );
};

export {MainLayout}