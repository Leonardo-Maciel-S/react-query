import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../axios/axios";

export const useCreatePost = () => {
  const clientQuery = useQueryClient();

  const mutate = useMutation({
    mutationFn: async (body: { title: string; body: string }) => {
      return api.post("/", body);
    },

    onSuccess: () => {
      console.log("success");
      clientQuery.invalidateQueries({
        queryKey: ["posts"],
      });
    },

    onError: () => {
      console.log("error");
    },
  });

  return mutate;
};
