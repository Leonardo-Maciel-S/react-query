import { useState } from "react";
import "./App.css";
import PostList from "./components/PostList/PostList";
import NewPost from "./components/newPost/NewPost";

function App() {
  const [isNewPostModalOpen, setIsNewPostModalOpen] = useState(false);

  const toggleOpenModal = () => {
    setIsNewPostModalOpen(!isNewPostModalOpen);
  };

  return (
    <>
      <div className="app">
        <h1>React Query</h1>

        {!isNewPostModalOpen && (
          <button type="button" onClick={toggleOpenModal}>
            Criar Post
          </button>
        )}

        {isNewPostModalOpen ? (
          <NewPost closeModal={toggleOpenModal} />
        ) : (
          <PostList />
        )}
      </div>
    </>
  );
}
export default App;
