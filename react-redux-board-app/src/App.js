import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { addPost } from './redux/postSlice';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const postList = useSelector((state) => state.posts.value);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addPost({
      id: uuidv4(),
      name: name,
      content: content
    }));

    setName("");
    setContent("");
  };

  return (
    <div className="App">
      <div>
        <h1>react-redux-board</h1>
      </div>
      <div className="addPost">
        <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} value={name} />
        <input type="text" placeholder="content" onChange={(e) => setContent(e.target.value)} value={content} />
        <button onClick={() => handleClick()}>post</button>
      </div>
      <div className="displayPosts">
        {postList.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.name}</h2>
            <h2 className="postContent">{post.content}</h2>
            <button>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
