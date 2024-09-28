import styled from "styled-components";

export const HomeStyle = styled.section`
  .container {
    display: flex;
    align-items: flex-start;
    padding: 3rem 3rem 0rem 3rem;
    justify-content: space-between;
  }

  .profile-left .profile-image {
    order: 1;
    max-width: 40%;
  }

  .profile-left .profile-info {
    max-width: 55%;
    margin-left: 5rem;
    color: black; /* Texto do Mortara agora é preto */
  }

  /* Forçar o título e subtítulo do Mortara a ficarem pretos */
  .profile-left .profile-info h1,
  .profile-left .profile-info h2 {
    color: black; /* Força o texto a ficar preto */
  }

  .profile-right {
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  .profile-right .profile-info {
    max-width: 55%;
    margin-right: 5rem;
  }

  .profile-right .profile-image {
    max-width: 40%;
    margin-bottom: 0; /* Remove qualquer espaçamento inferior da imagem */
    padding-bottom: 0; /* Remove padding inferior */
  }

  .profile-image img {
    width: 100%;
    height: auto;
  }

  .profile-info h1 {
    font-size: 3rem;
    margin: 0;
    color: var(--color7);
    padding: 0.6rem;
  }

  .profile-info h2 {
    font-size: 2rem;
    margin: 0;
    color: white;
    padding: 10px;
  }

  .stats {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }

  .stats-column {
    display: flex;
    flex-direction: column;
  }

  .stats div {
    margin-bottom: 3rem;
  }

  .stats div span {
    display: block;
    font-size: 4rem;
    font-weight: bold;
  }

  .stats div p {
    margin: 0;
    font-size: 1.2rem;
  }

  .selection-container {
    padding: 2rem 5%;
    text-align: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  .selection-title {
    color: var(--color3);
    font-size: 2.5rem;
  }

  .selection-text {
    color: var(--color1);
    font-size: 1.1rem;
    margin-top: 1.5rem;
    line-height: 1.6;
  }

  /* Seção do Nick De Vries com fundo vermelho */
  .section-nick {
    background-color: red;
    color: white;
    padding-top: 10rem;
    padding-bottom: 0; /* Remove qualquer padding adicional na parte inferior */
    margin-bottom: 0; /* Remove qualquer margem inferior */
  }

  /* Slideshow */
  .slideshow-container {
    position: relative;
    width: 100%;
    height: 70vh;
    overflow: hidden;
  }

  .slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  .slide-active {
    opacity: 1;
  }

  .slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .prev,
  .next {
    position: absolute;
    top: 50%;
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
    font-size: 2rem;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    z-index: 1;
  }

  .prev {
    left: 0;
  }

  .next {
    right: 0;
  }
`;
