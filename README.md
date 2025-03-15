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
- Com meus testes notei algo, toda vez que eu clicava em outra página, ou fora do navegador o useQuery fazia uma nova requisição, isso acontece porque por padrão assim que completa uma requisição o useQuery já classifica esses dados como dados antigos, sendo assim ele refaz sempre que voltamos o foco para a página.
- Para resolver isso temos uma outra propriedade **staleTime**, que recebe um tempo em milissegundos de quanto tempo o useQuery deve aguardar até fazer outra requisição automaticamente.
- E nos retorna um objeto com alguns estados que podemos desestruturar, os mais famosos são: **data** (dados resposta da requisição), **isPending** (Booleano que indica se a requisição está sendo executada), **isError** (caso retorne algum erro da requisição), etc.

  ```typescript
  import { useQuery } from "@tanstack/react-query";

  const getPosts = (): Promise<IPost[]> => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => data)
      .catch((e) => console.log(e));
  };

  const fiveMinutesInMs = 5 * 60 * 1000;

  const { data, isPending, isError } = useQuery({
    queryKey: ["Post"],
    queryFn: getPosts,
    staleTime: fiveMinutesInMs,
  });
  ```

## Alterando dados e invalidando requisições

- Queremos que toda vez que fizermos uma operação além do get, seja feita uma nova requisição para atualizar os dados guardados.
- Para operações como **Post**, **Put** e **Delete** utilizamos o **useMutation**, é semelhante ao useQuery, recebe um objeto contendo algumas propriedades. E uma delas é a função que vai fazer a interação com a API e retorna os mesmo estados: isError, isPending, isSuccess, etc.

  ```typescript
  import { useQuery } from "@tanstack/react-query";

  type newPostBody = {
    title: string;
    body: string;
  };

  const newPost = (body: newPostBody): Promise<IPost> => {
    const requestConfig = {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(body),
    };

    return fetch("https://jsonplaceholder.typicode.com/posts", requestConfig)
      .then((res) => res.json())
      .then((data) => data)
      .catch((e) => console.log(e));
  };

  export const useCreatePost = () => {
    const clientQuery = useQueryClient();

    const mutate = useMutation({
      mutationFn: newPost,

      onSuccess: () => {
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
  ```

- Nesse exemplo eu faço uma requisição de POST para a api e em caso de sucesso representado pela propriedade **onSuccess** eu chamo uma função que vai invalidar aquela primeira requisição de get que meu programa faz no início.
- Eu poderia fazer o mesmo exemplo para os outros métodos, apenas alterando o requestConfig.
- No projeto em si eu utilizei uma forma mais enxuta usando o axios que reduziu a função newPost para 1 linha haha mesmo assim aqui eu quis fazer da forma longa para exercitar.

### Considerações

- Logicamente existem dezenas de outras funcionalidades que estudarei durante meus dias, mas é uma ferramenta poderosa que nos reduz bastante dor de cabeça com os useEffect causando problemas de performance.
- Estou feliz com meu desenvolvimento, estou cada vez mais ficando empolgado com as possibilidades que o mundo da programação nos oferece.
- Até a próxima e bora pra cima, vlw flw.
