import React from 'react'
import "./Button.style.css"
import { Link } from 'react-router-dom';

const STYLES=['btn--primary','btn--outline']
const SIZES =['btn--medium','btn--large']

const Button = ({children,type,onClick,buttonStyle,buttonSize}) => {
    const checkButtonStyle=STYLES.includes(buttonStyle) ? 
    buttonStyle:STYLES[0]
    const checkButtonSizes=SIZES.includes(buttonSize)?buttonSize:SIZES[0]
    return (
        <div>
            <Link to="signup" class="btn-mobile">
                <button
                className={`btn ${checkButtonStyle} ${checkButtonSizes}`}
                onClick={onClick}
                type={type}
                >
                    {children} 
                </button>
            </Link>            
        </div>
    )
}

// {children} is just for the text to be written in the button 
export default Button
