import React from 'react';
function Header({ title }){
    return(
        <h1 className="header" key="header">{ title }</h1>
    )
}
export default Header;