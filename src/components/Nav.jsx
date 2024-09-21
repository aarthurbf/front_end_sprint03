import { Link } from 'react-router-dom'
import { NavStyle } from "../css/NavStyle"
import Logo from "../assets/images/logo.png"

const Nav = () => {
    return (
        <NavStyle>
            <section className='header'>
                <div className='header-container'>
                    <Link to="/">
                        <img src={Logo} alt="" className='logo' />
                    </Link>
                    <ul>
                        <li className='link'>
                            <Link to="/calendar" className='name'>Calendário</Link>
                        </li>
                        <li className='link'>
                            <Link to="/news" className='name'>Noticias</Link>
                        </li>
                        <li className='link'>
                            <Link to="/car" className='name'>Carro</Link>
                        </li>
                        <li className='link'>
                            <Link to="/shop" className='name'>Loja</Link>
                        </li>
                        <li className='link'>
                            <Link to="/stream" className='name'>Transmissão</Link>
                        </li>
                        <li className='link'>
                            <Link to="/selection" className='name'>Seleção</Link>
                        </li>
                    </ul>
                </div>
            </section>
        </NavStyle>
    )
}

export default Nav