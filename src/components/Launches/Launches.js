import {useEffect, useState} from "react";
import {launchesService} from "../../services/launchesService";
import {Launch} from "../Launch/Launch"
import css from './Launches.module.css'

const Launches = () => {

    const [launches, setLaunches] = useState([])

    useEffect(() => {
        launchesService.getAll().then(({data}) => setLaunches(data))
    }, []);

    return (
        <div className={css.launches}>
            {launches.map((launch, index) =>  <Launch launch={launch} key={index}/>)}
        </div>
    );
};

export {Launches};
