const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment
    return (
        <div>
            <p>postId: {postId} id: {id}</p>
            <p>name: {name}</p>
            <p>email: {email}</p>
            <p>body: {body}</p>
        </div>
    );
};

export {Comment};
