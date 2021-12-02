import React, {useState} from 'react';
import Counter from "./Components/Counter";
import ClassCounter from "./Components/ClassCounter";
import './Styles/app.css'
import PostItem from "./Components/postItem";

function App() {


    const [value, setValue] = useState('ТЕКСТ В ИНПУТЕ')




    return (
        <div className="App">
            <PostItem post={{id:1, title: 'java', body: 'Desription'}}/>

        </div>
    )

}

export default App;
