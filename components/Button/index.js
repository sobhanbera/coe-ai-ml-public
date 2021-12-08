import React from 'react'
import {componentStyles} from '../../styles/css.modules'

export default function Button(props) {
    return (
        <button className={componentStyles.buttonStyles.primaryButton}>
            {props.children}
        </button>
    )
}
