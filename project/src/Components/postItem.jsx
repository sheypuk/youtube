import React from 'react';

const PostItem = (props) => {
    return (
        <div>
            <div className ="post">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                    <div/>
                    <div/>
                </div>
                <div className="post__btns">
                    <button>Удалить</button>
                </div>
            </div>
        </div>
    );
};

export default PostItem;