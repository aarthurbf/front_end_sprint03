import styled from "styled-components";

export const StyledSection = styled.section`
  .stream-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .video-wrapper {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .video-container {
    width: 100%;
    background-color: var(--color1);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .video-player {
    width: 100%;
    height: 700px;
    background-color: var(--color2);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color7);
    font-size: 1.5rem;
  }

  .points-container {
    margin-top: 1rem;
    width: auto;
    display: flex;
    align-items: center;
    background-color: var(--color7);
    padding: 5px 0px;
    border-radius: 5px;
    color: var(--color1);
    font-weight: bold;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  .coin-icon {
    width: 25%;
    height: 25%;
  }

  .chat-section {
    display: flex;
    width: 100%;
    margin-top: 2rem;
  }

  .card-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--color7);
    border-radius: 1rem;
    margin-right: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  .card-container h1{
    color: var(--color1);
    margin-bottom: 10px;
  }

  .button-card {
    padding: 10px 20px;
    background-color: var(--color5);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background-color: #cc0000;
    }
  }


  .chat-container {
    flex: 2;
    display: flex;
    flex-direction: column;
    background-color: var(--color7);
    border-radius: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .chat-box {
    flex-grow: 1;
    background-color: var(--color7);
    border-radius: 1rem;
    padding: 1rem;
    overflow-y: auto;
  }

  .input-box {
    border: none;
    padding: 10px;
    border-radius: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    outline: none;
    font-size: 1rem;
    width: 100%;
  }
`;
