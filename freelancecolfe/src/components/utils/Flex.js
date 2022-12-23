import React from 'react';
import "./utils.css"
function Flex(props) {

const { children, flexDirection, padding, className} = props

    return ( 
        <div className={ className + 'flex'} style={{ flexDirection: flexDirection, paddong: padding}}> {children}</div>
     );
}

export default Flex;