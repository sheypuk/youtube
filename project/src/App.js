import React, {useState} from 'react';
import Counter from "./Components/Counter";
import ClassCounter from "./Components/ClassCounter";
import './Styles/app.css'
import PostItem from "./Components/postItem";
import PostList from "./Components/PostList";
import Mybutton from "./Components/UI/button/mybutton";
import Myinput from "./Components/UI/input/Myinput";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'java', body: 'Desription'},
        {id: 2, title: 'java2', body: 'Desription'},
        {id: 3, title: 'java3', body: 'Desription'},
    ])


    const [post, setPost] = useState({title: '', body: ''})


    const addNewPost = (e) => {
        e.preventDefault()

       setPosts ([...posts, {...post, id: Date.now()}])
        setPost({title: '', body: ''})
    }


    return (
        <div className="App">
            <form>
                {/*Управляемый компонент*/}
                <Myinput
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value })}
                    type='text'
                    placeholder="Название поста"
                />
                {/*Неуправляемый\Неконтролируемый*/}
                <Myinput
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value })}
                    type='text'
                    placeholder="описание поста"/>
                <Mybutton onClick={addNewPost}>Создать пост</Mybutton>
            </form>
            <PostList posts={posts} title="Посты про JS"/>


        </div>
    )

}

export default App;
