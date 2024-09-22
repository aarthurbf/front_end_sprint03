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
    color: var(--color7);
    text-shadow: #000 1px 2px 6px;
    text-transform: uppercase;
    margin: 1.25rem 10rem;
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
    margin: 4rem 0 0 10rem;
  }

  .selection-text {
    color: var(--color1);
    font-size: 1.3rem;
    margin: 1rem 6rem 0rem 10rem;
  }

  .form {
    width: 550px;
    height: 450px;
    background: var(--color7);
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
    width: 28%;
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
    border: 2px solid var(--color6);
    border-radius: 0.8rem
  }
  .form input:focus {
    border: 2px solid var(--color4);
  }
  .form p:before {
    content: attr(type);
    display: block;
    margin: 2rem 0.2rem 0.2rem;
    font-size: 0.9rem;
    color: var(--color2);
    text-transform: uppercase;
    font-weight: 650;
  }
  .form button {
    float: right;
    padding: 1rem 1rem;
    margin: 1rem 0 0;
    border: 2px solid var(--color5);
    background: transparent;
    color: var(--color2);
    cursor: pointer;
    transition: all 0.3s;
    border-radius: 0.8rem;
  }
  .form button:hover {
    background: var(--color4);
    color: var(--color6);
  }
`;
