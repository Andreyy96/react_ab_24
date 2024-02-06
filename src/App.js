import {Launches} from "./components/Launches/Launches";

// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
// потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)
// mission_name, launch_year, mission_patch_small

const App = () => {
    return (
        <div>
            <Launches/>
        </div>
    );
};

export {App};
