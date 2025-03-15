import { FormEvent, useState } from "react";
import { ContainerNewPost } from "./new-post-style";
import { useCreatePost } from "../../hooks/useCreatePost";

interface NewPostProps {
  closeModal: () => void;
}

const NewPost = ({ closeModal }: NewPostProps) => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const { mutate } = useCreatePost();

  const createPost = (e: FormEvent) => {
    e.preventDefault();

    mutate({ title, body });
    closeModal();
  };

  return (
    <ContainerNewPost>
      <h2>Criar novo post</h2>

      <form onSubmit={createPost}>
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="title"
            placeholder="React é muito bom!"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label>
          <span>Conteúdo:</span>
          <textarea
            name="content"
            placeholder="Como é bom desenvolver nessa ferramenta..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </label>

        <div>
          <button type="button" onClick={closeModal}>
            Cancelar
          </button>

          <button type="submit">Criar</button>
        </div>
      </form>
    </ContainerNewPost>
  );
};

export default NewPost;
