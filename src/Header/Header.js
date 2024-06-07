import './Header.css'
import { Link, NavLink } from 'react-router-dom';

function Header({onSearch}){
    
    return(
        <>
            <header className='header'>
                <div>
                    <Link to={'/'}style={{ color: '#f4ebfe'}}><h1>Love Library</h1></Link>
                </div>
                <div className='about'>
                    <NavLink to={'/tbr'} style={{ color: '#f4ebfe'}}><h3>TBR</h3></NavLink>
                    <NavLink to={'/about-contact'} style={{ color: '#f4ebfe'}}><h3>About/Contact</h3></NavLink>
                    
                </div>
            </header>
        </>
    )
};

export default Header