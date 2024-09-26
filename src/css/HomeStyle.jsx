import styled from "styled-components";
export const HomeStyle = {
    Container: styled.div`
      display: flex;
      height: 100vh;
      width: 100%;
      overflow: hidden;
    `,
    Side: styled.div`
      flex: ${({ expanded }) => (expanded ? '1' : '0.5')}; 
      transition: flex 1s ease, width 1s ease;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      background-color: ${({ left }) => (left ? '#e74c3c' : '#ecf0f1')};
      color: ${({ left }) => (left ? '#fff' : '#2c3e50')};
      cursor: pointer;
      position: relative;
      overflow: hidden;
      width: ${({ expanded }) => (expanded ? '100%' : '50%')}; 
      height: 100%;
  
      @media (max-width: 768px) {
        flex: ${({ expanded }) => (expanded ? '1' : '0.5')};
      }
    `,
    Image: styled.div`
      img {
        max-width: 100%;
        height: auto;
        transition: transform 1s ease;
        transform: ${({ expanded }) => (expanded ? 'translateY(0)' : 'translateY(0)')};
        position: absolute;
        bottom: 0;
      }
  
      display: flex;
      align-items: flex-end;
      justify-content: center;
      width: 100%;
      height: ${({ expanded }) => (expanded ? 'auto' : '50%')}; 
    `,
    InfoTop: styled.div`
      text-align: center;
      margin-bottom: 20px;
      h2 {
        font-size: 2.5rem;
        font-weight: bold;
      }
      p {
        font-size: 1.5rem;
        margin-top: 10px;
      }
  
      @media (max-width: 768px) {
        h2 {
          font-size: 1.8rem;
        }
        p {
          font-size: 1.2rem;
        }
      }
    `,
    Details: styled.div`
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      padding: 20px;
      position: absolute;
      top: 10%; 
      opacity: ${({ expanded }) => (expanded ? '1' : '0')};
      transition: opacity 0.8s ease-in-out; 
  
      h3 {
        font-size: 2rem; 
        font-weight: bold;
        margin: 0;
      }
  
      p {
        font-size: 1.5rem; 
        margin: 0;
      }
  
      @media (max-width: 768px) {
        h3 {
          font-size: 1.5rem;
        }
  
        p {
          font-size: 1.2rem;
        }
      }
    `,
};