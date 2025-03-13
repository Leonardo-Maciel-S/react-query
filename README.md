# React Query

- Projeto utilizado para aplicar os conhecimentos sobre a lib **React Query**.

## Instalação

- Instalamos utilizando o gerenciador de pacote, no meu caso o **npm**.
  ```bash
  npm i @tanstack/react-query
  ```

## Get Started

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
