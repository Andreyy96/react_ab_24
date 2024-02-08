

// Зробити компонент, в якому буде форма, за допомоги якої можливо
// створити нового юзера постовим запитом на https://jsonplaceholder.typicode.com/users

import {UsersBlock} from "./components/UsersBlock/UsersBlock";

const App = () => {
    return (
        <div>
            <UsersBlock/>
        </div>
    );
};

export {App};
