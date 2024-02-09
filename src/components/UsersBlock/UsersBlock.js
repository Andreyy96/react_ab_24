import {useEffect, useState} from "react";

import {UserForm} from "./UserForm/UserForm";
import {Users} from "./Users/Users";
import {userService} from "../../services/userService";

const UsersBlock = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, []);

    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <Users users={users}/>
        </div>
    );
};

export {UsersBlock};
