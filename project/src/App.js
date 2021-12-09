import React, {useState} from 'react';
import Counter from "./Components/Counter";
import ClassCounter from "./Components/ClassCounter";
import './Styles/app.css'
import PostItem from "./Components/postItem";
import PostList from "./Components/PostList";
import Mybutton from "./Components/UI/button/mybutton";
import Myinput from "./Components/UI/input/Myinput";
import PostForm from "./Components/PostForm";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'java', body: 'Desription'},
        {id: 2, title: 'java2', body: 'Desription'},
        {id: 3, title: 'java3', body: 'Desription'},
    ])



const createPost = (newPost) => {
        setPosts([...posts, newPost ])
}

const removePost =(post) => {
        setPosts(posts.filter(p => p.id !==post.id))
}




    return (
        <div className="App">
            <PostForm create={createPost}/>
            {posts.length !==0
            ? <PostList remove={removePost} posts={posts} title="Посты про JS"/>
            :
                <h1 style={{textAlign: 'center'}}>
                    Посты не найдены
                </h1>
            }
        </div>
    )

}

export default App;
