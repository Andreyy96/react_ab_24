import css from "./Launch.module.css"
const Launch = ({launch}) => {

    const {mission_name, launch_year, links: {mission_patch_small}} = launch


    return (
        <div className={css.launch}>
            <p>Mission name: {mission_name}</p>
            <p>year: {launch_year}</p>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export {Launch};
