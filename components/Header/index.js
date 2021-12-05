import React from 'react'
import {componentStyles} from '../../styles/css.modules'

export default function Header() {
    return (
        <header className={componentStyles.headerStyles.header}>
            <div className={componentStyles.headerStyles.content}>Home</div>
        </header>
    )
}
