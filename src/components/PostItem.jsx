import React from 'react';
import MyButton from "./UI/Button/MyButton"
import { router, useNavigate } from 'react-router-dom';

const PostItem = (props) => {
    const navigate = useNavigate();
    console.log();
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>Открыть</MyButton> 
                <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>    
            </div>
        </div>
    );
};

export default PostItem;