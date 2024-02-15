import {User} from "../User/User";
import css from './Users.module.css'

const Users = ({users}) => {

    return (
        <div className={css.users}>
            {users.map(user => <User user={user} key={user.id}/>)}
        </div>
    );
};

export {Users};
