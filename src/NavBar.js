import React from 'react'
import { Link } from '@reach/router'
import { css, keyframes } from '@emotion/core' 


const NavBar = () => (
    <header 
    css={css`
        background-color: #3333; 
        padding: 15px;
    `}
    >
        <Link to="/">Adopt Me!</Link>
        <span css={css` 
        font-size: 60px;  
        `}
        ></span>
    </header>
) 

export default NavBar