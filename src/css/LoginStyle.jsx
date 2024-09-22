import styled from "styled-components";

export const LoginStyle = styled.section`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 20px;
  }

  .login-form {
    max-width: 400px;
    width: 100%;
    padding: 30px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  header {
    font-size: 24px;
    margin-bottom: 20px;
    color: #232836;
  }

  .input-field {
    margin-bottom: 15px;
  }

  .input-field input {
    width: 100%;
    padding: 12px;
    border: 1px solid #cacaca;
    border-radius: 6px;
    font-size: 16px;
  }

  .forgot-pass {
    margin-bottom: 20px;
    text-align: right;
  }

  .forgot-pass a {
    font-size: 14px;
    color: #0171d3;
    text-decoration: none;
  }

  .login-btn {
    width: 100%;
    padding: 12px;
    background-color: var(--color5);
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 20px;
    transition: background-color 0.3s;
  }

  .login-btn:hover {
    background-color: var(--color3);
  }

  .signup-link span {
    font-size: 14px;
  }

  .signup-link a {
    color: #0171d3;
    text-decoration: none;
  }

  .divider {
    position: relative;
    margin: 30px 0;
    height: 1px;
    background-color: #d4d4d4;
    text-align: center;
  }

  .divider::before {
    content: "Ou";
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    padding: 0 10px;
    color: #8b8b8b;
  }

  .social-login {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .social-login a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: 1px solid #cacaca;
    border-radius: 6px;
    font-size: 16px;
    color: #232836;
    text-decoration: none;
    transition: background-color 0.3s;
  }

  .social-login a img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  .social-login a:hover {
    background-color: #f5f5f5;
  }

  @media (max-width: 768px) {
    .login-form {
      padding: 20px;
    }

    header {
      font-size: 22px;
    }

    .login-btn,
    .input-field input {
      font-size: 14px;
    }

    .divider::before {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    .login-form {
      padding: 15px;
    }

    header {
      font-size: 20px;
    }
  }
`;
