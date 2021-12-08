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


    const [title, setTitle] = useState('')

    const addNewPost = (e) => {
        e.preventDefault()
    }


    return (
        <div className="App">
            <form>
                {/*Управляемый компонент*/}
                <Myinput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type='text'
                    placeholder="Название поста"
                />
                <Myinput type='text' placeholder="описание поста"/>
                <Mybutton onclick={addNewPost}>Создать пост</Mybutton>
            </form>
            <PostList posts={posts} title="Посты про JS"/>


        </div>
    )

}

export default App;
