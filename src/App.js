// Зробити компонент, в якому буде форма, за допомоги якої можливо
// створити новий комментар постовим запитом на https://jsonplaceholder.typicode.com/comments
import {CommentsFolder} from "./components/CommentsFolder/CommentsFolder";

const App = () => {
    return (
        <div>
            <CommentsFolder/>
        </div>
    );
};

export {App};
