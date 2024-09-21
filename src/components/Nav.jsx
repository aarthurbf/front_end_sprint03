import { Link } from 'react-router-dom'
import { NavStyle } from "../css/NavStyle"

const Nav = () => {
    return (
        <NavStyle>
            <section className='header'>
                <div className='header-container'>
                    <ul>
                        <li className='link'>
                            <Link to="/calendar">Calendário</Link>
                        </li>
                        <li className='link'>
                            <Link to="/news">Noticias</Link>
                        </li>
                        <li className='link'>
                            <Link to="/car">Carro</Link>
                        </li>
                        <li className='link'>
                            <Link to="/shop">Loja</Link>
                        </li>
                        <li className='link'>
                            <Link to="/stream">Transmissão</Link>
                        </li>
                        <li className='link'>
                            <Link to="/selection">Seleção</Link>
                        </li>
                    </ul>
                </div>
            </section>
        </NavStyle>
    )
}

export default Nav