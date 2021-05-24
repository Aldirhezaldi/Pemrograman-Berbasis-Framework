import React from 'react'
import { Link } from 'react-router-dom'
 
const Header = () => (
    <nav className='navbar navbar-dark bg-dark'>
        <div className='container'>
            <Link className='navbar-brand' to='/'>Pendaftaran Bimbel IT</Link>
        </div>
    </nav>
)
 
export default Header