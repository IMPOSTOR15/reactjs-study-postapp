import React, {useState} from "react";
import MyButton from "./UI/BUTTON/MyButton"
import MyInput from "./UI/Input/MyInput"

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', bode: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
      }

    return (
        <div>
            <form>
                <MyInput
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    type="text"
                    placeholder="Название поста"
                />
                {/* <input ref={bodyInputRef}/> */}
                <MyInput
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    type="text"
                    placeholder="Описание поста"
                />
                <MyButton onClick={addNewPost} >Создать пост</MyButton>
            </form>
        </div>
    );
};

export default PostForm;