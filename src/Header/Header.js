import React, { useEffect, useState } from 'react';

const Header = () => {
 const [search, setSearch] = useState([])
 useEffect(() =>{
    
},[])
    return (
        <div className='header'>
            <h1>Welcome My Animation</h1>
            <input type="search" />
            <button onClick={setSearch}>Search</button>
        </div>
    );
};

export default Header;