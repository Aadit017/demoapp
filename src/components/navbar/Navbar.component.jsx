import React,{useState} from 'react'
import { Link} from 'react-router-dom';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import MenuIcon from '@material-ui/icons/Menu';
const Navbar = () => {
    const [click,setClick]=useState(false)
    const handleClick=()=>{
        setClick(!click)
    }
    return (
        <>
        
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">ASB</Link>
            <div className="menu-icons" onClick={handleClick}>
               {
                   click ? (<FastfoodIcon />) : (<MenuIcon />)
               }
            </div>
            </div>
        </nav>

        </>
    )
}

export default Navbar
