import React from 'react';
import Container from './Utils/Container';
import "./components.css"

function Nav(props) {
    const { children } = props

        return ( 
            <nav>
                <Container>
                    {children}
                </Container>
            </nav>

        );
}

export default Nav ;