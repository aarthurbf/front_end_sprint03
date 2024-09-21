import { SelectionStyle } from '../css/SelectionStyle';
import selectionImage from '../assets/images/image-selection.png';

const Selection = () => {
    return (
        <SelectionStyle>
            <section className='selection'>
                <div className="banner">
                    <h2>Em busca do próximo campeão <br /> da Fórmula E</h2>
                </div>
                <div className='selection-container'>
                    <h1 className='selection-title'>Seleção especial</h1>
                    <p className='selection-text'>Transformando sonhos em realidade, nosso projeto oferece uma seleção especial para jovens brasileiros se tornarem pilotos de Fórmula E. Ao serem selecionados, esses talentos terão a oportunidade de se tornarem ídolos nacionais e internacionais, elevando o nome do Brasil no cenário automobilístico mundial. Esta iniciativa visa não apenas descobrir novos talentos, mas também popularizar a Fórmula E no Brasil, inspirando uma nova geração de entusiastas e promovendo a sustentabilidade no esporte a motor.</p>
                    <p className='selection-text'>Nosso projeto, que será realizado em Interlagos, oferece uma oportunidade única para jovens brasileiros se destacarem como pilotos de Fórmula E. Com o objetivo de tornar o esporte mais acessível e popular no Brasil, buscamos identificar talentos excepcionais que possam se tornar futuros ídolos nacionais e internacionais.</p>
                </div>
                <div className="selection-form">
                    <form className="form">
                        <h2>Se inscreva</h2>
                        <p type="Nome:"><input placeholder="Escreva seu nome"></input></p>
                        <p type="Email:"><input placeholder="Informe seu email"></input></p>
                        <p type="Mensagem:"><input placeholder="Escreva sua mensagem"></input></p>
                        <button>Enviar mensagem</button>
                    </form>
                </div>
            </section>
        </SelectionStyle>
    )
}

export default Selection