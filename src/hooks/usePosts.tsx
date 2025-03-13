import { useQuery } from "@tanstack/react-query";
import IPost from "../interfaces/post";

const getPosts = (): Promise<IPost[]> => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => console.log(e));
};

export function usePosts() {
  const query = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return query;
}
