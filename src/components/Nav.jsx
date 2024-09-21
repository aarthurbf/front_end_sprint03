import { Link } from 'react-router-dom'
import { NavStyle } from "../css/NavStyle"
import Logo from "../assets/images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                        <li className='link'>
                            <Link to="/login" className='name'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='icon' viewBox="0 0 448 512"><path fill="#ffffff" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </NavStyle>
    )
}

export default Nav