import React, {useEffect, useMemo, useState} from 'react';
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
import {usePosts} from "./hooks/usePosts";
import axios from "axios";
import PostService from "./Components/API/PostsService";
import Loader from "./Components/UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching";


function App() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState (0);
    const [limit, setLimit] = useState (10);
    const [page, setPage] = useState (1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [fetchPosts, IsPostsLoading,  postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data)
        const totalCount = response.headers ['x-total-count']
        setTotalPages(getPageCount(totalCount, limit ))
    })

    useEffect(() => {
        fetchPosts()

    }, [])


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)

    }



    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    return (
        <div className="App">
            <button onClick={fetchPosts}>GET POSTS</button>
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Создать пользователя
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError &&
            <h1>Произошла ошибка &{postError}</h1>
            }
            {IsPostsLoading
                ? <div style={{display: 'flex' , justifyContent: 'center', marginTop: 50}}><Loader/></div>
                : < PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS"/>

            }
        </div>
    )

}

export default App;
