import React, {useState} from 'react';
import Counter from "./Components/Counter";
import ClassCounter from "./Components/ClassCounter";
import './Styles/app.css'
import PostItem from "./Components/postItem";
import PostList from "./Components/PostList";
import Mybutton from "./Components/UI/button/mybutton";
import Myinput from "./Components/UI/input/Myinput";
import PostForm from "./Components/PostForm";
import Myselect from "./Components/UI/select/Myselect";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'java', body: 'Desription1'},
        {id: 2, title: 'ara', body: 'Desription2'},
        {id: 3, title: 'java3', body: 'Desription3'},
    ])


    const [selectedSort, setSelectedSort] = useState('')


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    const sortPosts = (sort) => {
        setSelectedSort(sort);
        console.log(sort)
        setPosts([...posts].sort((a,b) =>a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <Myselect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Сортировка"
                    options={[
                        {value: 'title', name: 'По названия'},
                        {value: 'body', name: 'По описанию'}

                    ]}
                />
            </div>
            {posts.length
                ?
                <PostList remove={removePost} posts={posts} title="Посты про JS"/>
                :
                <h1 style={{textAlign: 'center'}}>
                    Посты не найдены
                </h1>
            }
        </div>
    )

}

export default App;
