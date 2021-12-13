import React from 'react'
import s from '../styles/SilverTitile.module.css'

const SilverTitile = (props) => {
    let width_block = `${props.width}px`;
    let margin_bottom_block = `${props.margin_bottom}px`;
    return (
        <div className={s.silver_title} style={{ width: width_block, marginBottom: margin_bottom_block}}>
            {
                props.children
            }
        </div>
    )
}

export default SilverTitile
