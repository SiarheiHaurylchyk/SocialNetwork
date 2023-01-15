import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let DialogPost = [
        {count:1, message: "Hi, how are you?"},
        {count:2, message: "It's my first post"},
    ]

    let Posts = DialogPost.map(post=>{
        return(
            <Post message={post.message} likesCount={post.count}/>
        );
    })

    return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
          {Posts}
      </div>
    </div>
  )
}

export default MyPosts;