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
                    <label>Search</label>
                    <input
                    type='text'
                    //value={}
                    placeholder='Find your next read!'
                    />
                </div>
                <div>
                    <h1>Love Library</h1>
                </div>
                <div>
                    <h3>About/Contact</h3>
                </div>
            </header>
        </>
    )
};

export default Header