import './App.css';
import { useSelector } from "react-redux";

function App() {
  const postList = useSelector((state) => state.posts.value);

  return (
    <div className="App">
      <div>
        <h1>react-redux-board</h1>
      </div>
      <div className="addPost">
        <input type="text" placeholder="name" />
        <input type="text" placeholder="content" />
        <button>post</button>
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
