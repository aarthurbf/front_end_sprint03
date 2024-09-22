import styled from "styled-components";

export const NewsStyle = styled.section`
  .btn {
    background-color: var(--color4);
    border: 2px solid var(--color5);
    padding: 8px 0.9rem;
    border-radius: 5px;
    color: var(--color6);
    transition: var(--transition);
  }
  .btn:hover {
    background: transparent;
    color: var(--color2);
  }
  .produto-title {
    font-size: 5vmin;
    text-align: center;
    margin: 2.5rem 0 2rem;
    color: var(--color5);
  }
  .produto-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    grid-gap: 20px;
    padding: 0 1rem;
  }

  .produto-item {
    width: 30rem;
    margin: 3rem auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    box-shadow: 1px 1px 30px darkgray;
    border-radius: 5px;
    transition: 0.5s;
  }
  .produto-item:hover {
    transform: scale(1.1);
  }

  .produto-item img {
    width: 100%;
    border-radius: 5px;
  }
  .produto-item h3 {
    margin: 2rem 0;
    font-weight: 800;
  }
  .produto-item p {
    margin: 0 0 1.5rem;
    width: 80%;
  }

  .vejaMais {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    .produto-list {
      grid-template-columns: repeat(2, 1fr);
    }

    .produto-item {
      width: 25rem;
    }
  }

  @media screen and (max-width: 480px) {
    .produto-list {
      grid-template-columns: repeat(1, 1fr);
    }

    .produto-item {
      width: 100%;
      margin: 3rem auto;
      padding: 1.5rem;
    }
  }
`;
