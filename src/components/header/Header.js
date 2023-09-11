import './Header.css';
import { NavLink } from 'react-router-dom';


const Header = () => {

    return (
        <div className='header'>
            <div className="header__links">
                <NavLink to='/main'>Главная страница</NavLink>
                <NavLink to='/task'>Задание со звездочкой</NavLink>
            </div>
        </div>
    );
};

export default Header;