import React from 'react';

//การรับค่า props.children มาใช้งาน
const Comment = (props) => {
    return (
        <div>
            <span>{props.data} from id: {props.userId}</span>
        </div>
    )
}
export default Comment;

