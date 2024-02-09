import {useForm} from "react-hook-form";

import {commentService} from "../../../services/commentService";

const CommentForm = ({setComments}) => {
    const {register, reset, handleSubmit, formState:{errors}} = useForm()

    const createComment = (comment) => {
        commentService.postComment(comment).then(({data})=> setComments(prev=>[...prev, data]));
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(createComment)}>
                <input type="text" placeholder={'PostId'} {...register('postId', {
                    valueAsNumber: true,
                    min: {value: 1, message: "min 1"},
                    max: {value: 100, message: "max 100"}
                })}/>
                <input type="text" placeholder={'name'} {...register('name', {
                    pattern: {
                        value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,15}$/,
                        message: 'max 15 characters'
                    }
                })}/>
                <input type="email" placeholder={'email'} {...register('email')}/>
                <input type="text" placeholder={'body'} {...register('body')}/>
                <button>Save</button>
                {errors.postId && <div>{errors.postId.message}</div>}
                {errors.name && <div>{errors.name.message}</div>}
            </form>
        </div>
    );
};

export {CommentForm};
