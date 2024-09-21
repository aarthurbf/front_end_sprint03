import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <Link to="/calendar">Calendário</Link>
            <Link to="/news">Noticias</Link>
            <Link to="/car">Carro</Link>
            <Link to="/shop">Loja</Link>
            <Link to="/stream">Transmissão</Link>
            <Link to="/selection">Seleção</Link>
        </>
    )
}

export default Nav