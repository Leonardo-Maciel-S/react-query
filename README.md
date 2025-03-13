# React Query

- Projeto utilizado para aplicar os conhecimentos sobre a lib **React Query**.

## Instalação

- Instalamos utilizando o gerenciador de pacote, no meu caso o **npm**.

  ```bash
  npm i @tanstack/react-query
  ```

## Setup inicial

- Primeiro passo é importar o **QueryClientProvider** e o **QueryClient**.
- Envolvemos nosso componente principal com o QueryClientProvider e passamos um client como props.
- Esse client é uma instância que criamos com o QueryClient.

  ```typescript
  import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

  const queryClient = new QueryClient();

  function App() {
    return (
      <QueryClientProvider client={queryClient}>
        <div className="app">
          <h1>React Query</h1>
        </div>
      </QueryClientProvider>
    );
  }
  ```

## Utilização mais simples

- Para configurar uma requisição utilizamos o **useQuery**.
- Esse hook recebe um objeto com algumas propriedades que podemos configurar.
- As configurações obrigatórias são a **queryKey** (array de string que identifica aquela requisição) e **queryFn** (função que interage com a API).
- E nos retorna um objeto com alguns estados que podemos desestruturar, os mais famosos são: **data** (dados resposta da requisição), **isPending** (Booleano que indica se a requisição está sendo executada), **isError** (caso retorne algum erro da requisição)

  ```typescript
  import { useQuery } from "@tanstack/react-query";

  const getPosts = (): Promise<IPost[]> => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => data)
      .catch((e) => console.log(e));
  };

  const { data, isPending, isError } = useQuery({
    queryKey: ["Post"],
    queryFn: getPosts,
  });
  ```
