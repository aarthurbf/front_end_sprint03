import React, { useState } from 'react';
import { HomeStyle } from '../css/HomeStyle';
import Mortara from '../assets/images/mortara.png';
import Nick from '../assets/images/nick.png';
import Carro1 from '../assets/images/carro1.jpg';
import Carro2 from '../assets/images/carro2.jpg';
import Carro3 from '../assets/images/carro3.jpg';
import Carro4 from '../assets/images/carro4.jpg';

const Home = () => {
    const images = [Carro1, Carro2, Carro3, Carro4];
    const [currentIndex, setCurrentIndex] = useState(0);

    const changeSlide = (direction) => {
        setCurrentIndex((prevIndex) =>
            direction === "next"
                ? (prevIndex + 1) % images.length
                : (prevIndex === 0 ? images.length - 1 : prevIndex - 1)
        );
    };
    return (
        <HomeStyle>
            <section>
                <section className="slideshow-container">
                    {images.map((image, index) => (
                        <div key={index} className={`slide ${index === currentIndex ? 'slide-active' : ''}`}>
                            <img src={image} alt={`Slide ${index}`} />
                        </div>
                    ))}
                    <button className="prev" onClick={() => changeSlide("prev")}>❮</button>
                    <button className="next" onClick={() => changeSlide("next")}>❯</button>
                </section>
                <div className="container">
                    <div className="profile-image">
                        <img alt="Two race car drivers in Mahindra racing suits, one with a helmet and one without, standing with arms crossed." height="600" src={Mortara} width="400" />
                    </div>
                    <div className="profile-info">
                        <h1>
                            EDOARDO MORTARA
                        </h1>
                        <h2>
                            PILOTO
                        </h2>
                        <div className="stats">
                            <div className="stats-column">
                                <div>
                                    <span>
                                        P2
                                    </span>
                                    <p>
                                        Melhor Resultado
                                        <br />
                                        Campeonato Mundial
                                    </p>
                                </div>
                                <div>
                                    <span>
                                        6
                                    </span>
                                    <p>
                                        Vitórias
                                    </p>
                                </div>
                            </div>
                            <div className="stats-column">
                                <div>
                                    <span>
                                        13
                                    </span>
                                    <p>
                                        Pódios
                                    </p>
                                </div>
                                <div>
                                    <span>
                                        3
                                    </span>
                                    <p>
                                        Poles Positions
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="profile-image">
                        <img alt="Two race car drivers in Mahindra racing suits, one with a helmet and one without, standing with arms crossed." height="600" src={Mortara} width="400" />
                    </div>
                    <div className="profile-info">
                        <h1>
                            EDOARDO MORTARA
                        </h1>
                        <h2>
                            PILOTO
                        </h2>
                        <div className="stats">
                            <div className="stats-column">
                                <div>
                                    <span>
                                        P2
                                    </span>
                                    <p>
                                        Melhor Resultado
                                        <br />
                                        Campeonato Mundial
                                    </p>
                                </div>
                                <div>
                                    <span>
                                        6
                                    </span>
                                    <p>
                                        Vitórias
                                    </p>
                                </div>
                            </div>
                            <div className="stats-column">
                                <div>
                                    <span>
                                        13
                                    </span>
                                    <p>
                                        Pódios
                                    </p>
                                </div>
                                <div>
                                    <span>
                                        3
                                    </span>
                                    <p>
                                        Poles Positions
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="selection-container">
                    <h1 className="selection-title">Seleção especial</h1>
                    <p className="selection-text">
                        Transformando sonhos em realidade, nosso projeto oferece uma seleção especial para jovens brasileiros se tornarem pilotos de Fórmula E. Ao serem selecionados, esses talentos terão a oportunidade de se tornarem ídolos nacionais e internacionais, elevando o nome do Brasil no cenário automobilístico mundial.
                        <br /><br />
                        Esta iniciativa visa não apenas descobrir novos talentos, mas também popularizar a Fórmula E no Brasil, inspirando uma nova geração de entusiastas e promovendo a sustentabilidade no esporte a motor.
                    </p>
                </div>
            </section>
        </HomeStyle>
    );
};

export default Home;