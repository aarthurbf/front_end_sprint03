import { NewsStyle } from "../css/NewsStyle";
import Imagem1 from "../assets/images/Image1.png";
import Imagem2 from "../assets/images/Image2.png";
import Imagem3 from "../assets/images/Image3.png";
import Imagem4 from "../assets/images/Image4.png";
import Imagem5 from "../assets/images/Image5.png";
import Imagem6 from "../assets/images/Image6.png";

const News = () => {
  return (
    <NewsStyle>
      <section>
        <h2 className="produto-title">Noticias</h2>
        <div className="produto-list">
          <div className="produto-item">
            <img src={Imagem1} alt="" />
            <h3>Atualização Positiva nos Testes do GEN3 Evo</h3>
            <p>
              A Mahindra Racing anunciou uma atualização positiva nos testes do
              carro GEN3 Evo, destacando melhorias em velocidade e eficiência.
            </p>
            <a href="" className="btn">
              Leia mais
            </a>
          </div>

          <div className="produto-item">
            <img src={Imagem2} alt="" />
            <h3>Prêmio de Melhor Conteúdo de Mídia Social</h3>
            <p>
              A equipe ganhou o prêmio de Melhor Conteúdo de Mídia Social na
              Fórmula E, reconhecendo seu engajamento e inovação nas plataformas
              digitais.
            </p>
            <a href="" className="btn">
              Leia mais
            </a>
          </div>

          <div className="produto-item">
            <img src={Imagem3} alt="" />
            <h3>Temporada de Sucesso em Londres</h3>
            <p>
              A Mahindra Racing terminou a temporada da Fórmula E em alta, com
              uma performance sólida nas corridas finais em Londres.
            </p>
            <a href="" className="btn">
              Leia mais
            </a>
          </div>

          <div className="produto-item">
            <img src={Imagem4} alt="" />
            <h3>Nova Formação de Pilotos</h3>
            <p>
              Para a Temporada 10, a equipe contará com os experientes pilotos
              Nyck de Vries e Edoardo Mortara, trazendo uma combinação de
              talento e experiência para a equipe.
            </p>
            <a href="" className="btn">
              Leia mais
            </a>
          </div>

          <div className="produto-item">
            <img src={Imagem5} alt="" />
            <h3>Parceria com Chotto Matte para o E-Prix de Londres 2024</h3>
            <p>
              A Mahindra Racing anunciou uma parceria com o restaurante Chotto
              Matte para o E-Prix de Londres 2024, trazendo uma experiência
              gastronômica única para os fãs durante o evento.
            </p>
            <a href="" className="btn">
              Leia mais
            </a>
          </div>

          <div className="produto-item">
            <img src={Imagem6} alt="" />
            <h3>Compromisso com a Era Gen3</h3>
            <p>
              A Mahindra Racing foi a primeira fabricante a se comprometer com a
              era Gen3 do Campeonato Mundial de Fórmula E da FIA ABB
            </p>
            <a href="" className="btn">
              Leia mais
            </a>
          </div>
        </div>
      </section>
    </NewsStyle>
  );
};

export default News;
