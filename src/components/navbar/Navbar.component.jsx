import React,{useState,useEffect} from 'react'
import { Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Button from '../Button/Button.component';
import "./Navbar.style.css"
const Navbar = () => {
    const [click,setClick]=useState(false)
    const handleClick=()=>{
        setClick(!click)
    }
    const [button,setButton]=useState(true)
    const closeMobileMenu=()=>{
        setClick(false)
    }
    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false)
        }else{
            setButton(true)
        }
    }
    useEffect(()=>{
        showButton()
    },[])
    window.addEventListener('resize',showButton)
    return (
        <>
        
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>ASB</Link>
            <div className="menu-icon" onClick={handleClick}>
               {
                   click ? (<CloseIcon className="fas fa-times"/>) : (<MenuIcon className="fas fa-bars"

                   />)
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
            {button && <Button
            buttonStyle='btn--outline'

            >Sign Up</Button>}
            </div>
        </nav>

        </>
    )
}

export default Navbar
