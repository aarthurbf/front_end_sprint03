import styled from "styled-components";

export const HomeStyle = styled.section`
  .container {
            display: flex;
            align-items: flex-start;
            padding: 20px;
        }
        .profile-image {
            max-width: 50%;
        }
        .profile-image img {
            width: 100%;
            height: auto;
        }
        .profile-info {
            max-width: 50%;
            margin-left: 20px;
        }
        .profile-info h1 {
            font-size: 36px;
            margin: 0;
        }
        .profile-info h2 {
            font-size: 24px;
            margin: 0;
            font-weight: normal;
        }
        .stats {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
        }
        .stats-column {
            display: flex;
            flex-direction: column;
        }
        .stats div {
            margin-bottom: 20px;
        }
        .stats div span {
            display: block;
            font-size: 48px;
            font-weight: bold;
        }
        .stats div p {
            margin: 0;
            font-size: 18px;
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
      // Slideshow 
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

  .prev, .next {
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

`