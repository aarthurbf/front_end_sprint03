import styled from "styled-components";
import selectionImage from "../assets/images/image-selection.png";

export const SelectionStyle = styled.section`
  .banner {
    background: url(${selectionImage});
    background-size: cover;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    text-align: left;
  }

  .banner h2 {
    color: var(--color6);
    text-shadow: #000 2px 3px 4px;
    text-transform: uppercase;
    margin: 1.25rem 15rem;
    font-size: 3rem;
  }

  .selection-container {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 3rem;
  }

  .selection-title {
    color: var(--color3);
    font-size: 4rem;
    margin: 5rem 0 0 15rem;
  }

  .selection-text {
    color: var(--color1);
    font-size: 1.4rem;
    margin: 2rem 6rem 0 15rem;
  }

  .form {
    width: 500px;
    height: 450px;
    background: var(--color6);
    border-radius: 1rem;
    box-shadow: 0 0 3rem -10px var(--color1);
    margin: calc(50vh - 220px) auto;
    padding: 1.25rem 1.8rem;
    max-width: calc(100vw - 40px);
    position: relative;
  }
  .form h2 {
    margin: 0.6rem 0;
    padding-bottom: 0.6rem;
    width: 100%;
    color: var(--color3);
    border-bottom: 3px solid var(--color2);
  }
  .form input {
    width: 100%;
    padding: 0.6rem;
    background: none;
    outline: none;
    border: 0;
    transition: all 0.3s;
    border-bottom: 2px solid var(--color2);
  }
  .form input:focus {
    border-bottom: 2px solid var(--color4);
  }

  .form p:before {
    content: attr(type);
    display: block;
    margin: 2rem 0 0;
    font-size: 0.9rem;
    color: var(--color1);
    text-transform: uppercase;
  }
  .form button {
    float: right;
    padding: 1rem 1rem;
    margin: 1rem 0 0;
    border: 2px solid var(--color2);
    background: transparent;
    color: var(--color2);
    cursor: pointer;
    transition: all 0.3s;
  }
  .form button:hover {
    background: var(--color2);
    color: var(--color6);
  }
`;
