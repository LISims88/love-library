import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react'


function Header({onSearch}){
    const [search, setSearch] = useState('')
    const handleSearch =(event) => {
        event.preventDefault();
        if(onSearch){
            onSearch(search)
        }
        setSearch('');
   }
    return(
        <>
            <header className='header'>
                <div className='search'>
                    <label htmlFor='search-input'>Search</label>
                    <input
                    type='search'
                    id='site-search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Find your next read!'
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
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