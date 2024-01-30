import React from 'react'

const NavItem = (props) => {
    return (
        <button onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default NavItem
