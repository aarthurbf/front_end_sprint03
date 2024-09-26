import React, { useState } from 'react';
import { HomeStyle } from '../css/HomeStyle';
import Mortara from '../assets/images/mortara.png';
import Nick from '../assets/images/nick.png';

const Home = () => {
    const [expanded, setExpanded] = useState(null);

    const handleExpand = (driver) => {
        setExpanded(driver === expanded ? null : driver);
    };

    return (
        <HomeStyle.Container>
            {/* Lado do Edoardo Mortara */}
            <HomeStyle.Side
                expanded={expanded === 'mortara'}
                onClick={() => handleExpand('mortara')}
                left
                hide={expanded === 'devries'} /* Oculta Nick de Vries se Mortara estiver expandido */
            >
                <HomeStyle.InfoTop expanded={expanded === 'mortara'} left>
                    <h2>Edoardo Mortara</h2>
                    <p>Da Suíça para o Mundo</p>
                </HomeStyle.InfoTop>
                <HomeStyle.Image>
                    <img src={Mortara} alt="Edoardo Mortara" />
                </HomeStyle.Image>
                {expanded === 'mortara' && (
                    <HomeStyle.Details expanded={expanded === 'mortara'}>
                        <div className="left">
                            <h3>Pódios</h3>
                            <p>13 Pódios</p>
                            <h3>Pole Positions</h3>
                            <p>3</p>
                        </div>
                        <div className="right" alignRight>
                            <h3>Vitórias</h3>
                            <p>6 Vitórias</p>
                            <h3>Melhor Resultado</h3>
                            <p>P2</p>
                        </div>
                    </HomeStyle.Details>
                )}
            </HomeStyle.Side>

            {/* Lado do Nick de Vries */}
            <HomeStyle.Side
                expanded={expanded === 'devries'}
                onClick={() => handleExpand('devries')}
                right
                hide={expanded === 'mortara'} /* Oculta Mortara se Nick de Vries estiver expandido */
            >
                <HomeStyle.InfoTop expanded={expanded === 'devries'} right>
                    <h2>Nick de Vries</h2>
                    <p>Da Holanda para o Mundo</p>
                </HomeStyle.InfoTop>
                <HomeStyle.Image>
                    <img src={Nick} alt="Nick de Vries" />
                </HomeStyle.Image>
                {expanded === 'devries' && (
                    <HomeStyle.Details expanded={expanded === 'devries'}>
                        <div className="left">
                            <h3>Pódios</h3>
                            <p>8 Pódios</p>
                            <h3>Pole Positions</h3>
                            <p>2</p>
                        </div>
                        <div className="right" alignRight>
                            <h3>Vitórias</h3>
                            <p>5 Vitórias</p>
                            <h3>Melhor Resultado</h3>
                            <p>P1</p>
                        </div>
                    </HomeStyle.Details>
                )}
            </HomeStyle.Side>
        </HomeStyle.Container>
    );
};

export default Home;
