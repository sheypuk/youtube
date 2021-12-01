import React, {useState} from 'react';
import Counter from "./Components/Counter";
import ClassCounter from "./Components/ClassCounter";


function App() {


    const [value, setValue] = useState('ТЕКСТ В ИНПУТЕ')




    return (
        <div className='App'>
         <ClassCounter/>
        </div>
    )

}

export default App;
