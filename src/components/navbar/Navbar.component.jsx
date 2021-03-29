import React,{useState} from 'react'
import { Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
const Navbar = () => {
    const [click,setClick]=useState(false)
    const handleClick=()=>{
        setClick(!click)
    }
    const closeMobileMenu=()=>{
        setClick(false)
    }
    return (
        <>
        
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">ASB</Link>
            <div className="menu-icons " onClick={handleClick}>
               {
                   click ? (<CloseIcon />) : (<MenuIcon />)
               }
            </div>
            <ul className={click?'nav-menu active ' :'nav-menu'}>
                <li className="menu-item">
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
                </li>
                <li className="menu-item">
                    <Link to="/services" className="nav-links" onClick={closeMobileMenu}>Services</Link>
                </li>
                <li className="menu-item">
                    <Link to="/products" className="nav-links" onClick={closeMobileMenu}>Products</Link>
                </li>
                <li className="menu-item">
                    <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>Sign Up</Link>
                </li>
            </ul>
            
            </div>
        </nav>

        </>
    )
}

export default Navbar
