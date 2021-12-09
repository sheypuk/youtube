import React from 'react';
import MyButton from "./UI/button/mybutton";

const PostItem = (props) => {
    return (
        <div>
            <div className ="post">
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                    <div/>
                    <div/>
                </div>
                <div className="post__btns">
                    <MyButton onClick={() =>props.remove(props.post) }>
                        Удалить
                    </MyButton>
                </div>
            </div>
        </div>
    );
};

export default PostItem;