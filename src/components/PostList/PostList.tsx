import { usePosts } from "../../hooks/usePosts";
import Post from "../Post/Post";
import { ContainerPostList } from "./post-list-styles";

const PostList = () => {
  const { data } = usePosts();

  return (
    <ContainerPostList>
      {data?.map((post) => (
        <Post title={post.title} body={post.body} />
      ))}
    </ContainerPostList>
  );
};

export default PostList;
