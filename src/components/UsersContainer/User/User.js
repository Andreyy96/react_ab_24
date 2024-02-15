import {useNavigate} from "react-router-dom";

import  css from './User.module.css'

const User = ({user}) => {

    const {id, name} = user

    const navigate = useNavigate()

    return (
        <div className={css.user}>
            <h3>{id}) {name}</h3>
            <button onClick={() => navigate(id.toString() , {state: {user}})}>show details</button>
        </div>
    );
};

export {User};
