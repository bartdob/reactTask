import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

function Header({title}) {

    const onClick = () => {
        console.log('clik')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Tasks: '
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Header
