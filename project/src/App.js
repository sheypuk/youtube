import React, {useMemo, useState} from 'react';
import Counter from "./Components/Counter";
import ClassCounter from "./Components/ClassCounter";
import './Styles/app.css'
import PostItem from "./Components/postItem";
import PostList from "./Components/PostList";
import Mybutton from "./Components/UI/button/mybutton";
import Myinput from "./Components/UI/input/Myinput";
import PostForm from "./Components/PostForm";
import Myselect from "./Components/UI/select/Myselect";
import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/UI/MyModal/MyModal";
import MyButton from "./Components/UI/button/mybutton";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'java', body: 'Desription1'},
        {id: 2, title: 'ara', body: 'Desription2'},
        {id: 3, title: 'java3', body: 'Desription3'},
    ])


 const [filter, setFilter] = useState({sort: '', query: ''})
const [modal, setModal] = useState(false);


    const sortedPosts = useMemo(() =>{
        console.log('Обработка функции сорт')
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    },  [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() =>{
            return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query,sortedPosts ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }



    return (
        <div className="App">
            <MyButton style={{marginTop: 30}} onClick={()=> setModal(true)}>
                Создать пользователя
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>

                <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS"/>



        </div>
    )

}

export default App;
