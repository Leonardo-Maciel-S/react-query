import { styled } from "styled-components";

export const ContainerNewPost = styled.div`
  width: 800px;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 5px 5px 10px gray;

  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    color: gray;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  div {
    display: flex;
    justify-content: space-between;
  }
`;
