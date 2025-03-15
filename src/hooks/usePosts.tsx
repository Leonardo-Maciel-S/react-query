import { useQuery } from "@tanstack/react-query";
import IPost from "../interfaces/post";
import { api } from "../axios/axios";

const getPosts = (): Promise<IPost[]> => {
  return api
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.data);
};

export function usePosts() {
  const query = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    staleTime: 5 * 60 * 1000,
  });

  return query;
}
