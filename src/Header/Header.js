import './Header.css'
//import { useState } from 'react'


function Header(){
    // const [search, setSearch] = useState('')
    // const handleSearch =(event) => {
    //     event.preventDefault();
    //     setSearch('');
    //     const searchQuery =
    // }
    return(
        <>
            <header className='header'>
                <div className='search'>
                    <label htmlFor='search-input'>Search</label>
                    <input
                    type='text'
                    id='search-input'
                    //value={}
                    placeholder='Find your next read!'
                    />
                </div>
                <div>
                    <h1>Love Library</h1>
                </div>
                <div className='about'>
                    <h3>TBR</h3>
                    <h3>About/Contact</h3>
                </div>
            </header>
        </>
    )
};

export default Header