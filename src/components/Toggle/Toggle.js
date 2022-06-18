import { useState } from 'react'
import { themContext } from '../../Context'
import { useContext } from 'react'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'

import './toggle.css'

const Toggle = () => {
    const { state: { darkMode }, dispatch } = useContext(themContext)

    return (
        <div className="toggle" onClick={() => dispatch({ type: 'toggle' })}>
            <Moon />
            <Sun />
            <div className="t-button" style={!darkMode ? { right: "1px" } : { left: "1px" }}>
            </div>
        </div>
    )
}

export default Toggle