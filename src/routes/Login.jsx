import { LoginStyle } from "../css/LoginStyle";
import Google from "../assets/images/google.png";
import Facebook from "../assets/images/facebook.png";

const Login = () => {
  return (
    <LoginStyle>
      <section className="container">
        <div className="login-form">
          <header>Login</header>
          <form>
            <div className="input-field">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-field">
              <input type="password" placeholder="Senha" required />
            </div>
            <div className="forgot-pass">
              <a href="#">Esqueceu a senha?</a>
            </div>
            <button className="login-btn">Login</button>
          </form>
          <div className="signup-link">
            <span>Não tem uma conta? <a href="#">Criar</a></span>
          </div>
          <div className="divider"></div>
          <div className="social-login">
            <a href="#" className="facebook">
              <img src={Facebook} alt="Facebook" />
              <span>Login com Facebook</span>
            </a>
            <a href="#" className="google">
              <img src={Google} alt="Google" />
              <span>Login com Google</span>
            </a>
          </div>
        </div>
      </section>
    </LoginStyle>
  );
};

export default Login;
