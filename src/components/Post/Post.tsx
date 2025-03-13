import { ContainerPost, PostContentPost, TitlePost } from "./post-styles";

interface PostProps {
  title: string;
  body: string;
}

const Post = ({ title, body, ...rest }: PostProps) => {
  return (
    <ContainerPost {...rest}>
      <TitlePost>{title}</TitlePost>

      <PostContentPost>{body}</PostContentPost>
    </ContainerPost>
  );
};

export default Post;
