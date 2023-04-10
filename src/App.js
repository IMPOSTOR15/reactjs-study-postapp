import React, {useState, useRef} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import PostItem from './components/PostItem'
import PostList from "./components/PostList";
import MyButton from "./components/UI/BUTTON/MyButton"
import MyInput from "./components/UI/Input/MyInput"
function App() {
  const [posts, setPosts] = useState([
      {id: 1, title: 'JavaScript 0', body: 'Description'},
      {id: 2, title: 'JavaScript 1', body: 'Description'},
      {id: 3, title: 'JavaScript 2', body: 'Description'},
  ])
  // const [title, setTitle] = useState('');
  // const [body, setBody] = useState('');

  const [post, setPost] = useState({title: '', bode: ''})

  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, {...post, id:Date.now()}]);
    setPost({title: '', bode: ''})
  }

  return (
    <div className="App">
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
      <PostList posts={posts} title="Список постов про JS"/>

    </div>
  );
}

export default App;
