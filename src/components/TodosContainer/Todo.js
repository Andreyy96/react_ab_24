import css from './Todo.module.css'
const Todo = ({todo}) => {
    const {userId, id, title, completed} = todo

    return (
        <div className={css.todo}>
            <p>userId: {userId}</p>
            <p>id: {id}</p>
            <p>title: {title}</p>
            <p>completed: {completed ? 'Yes': 'No'}</p>
        </div>
    );
};

export {Todo};
