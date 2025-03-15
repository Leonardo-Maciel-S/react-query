import { usePosts } from "../../hooks/usePosts";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Post from "../Post/Post";
import { ContainerPostList } from "./post-list-styles";

const PostList = () => {
  const { data, isLoading } = usePosts();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <ContainerPostList>
      {data?.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </ContainerPostList>
  );
};

export default PostList;
