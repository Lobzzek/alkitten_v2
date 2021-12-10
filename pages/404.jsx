import React from 'react'
import MainWrapper from '../components/MainWrapper/MainWrapper.jsx'
import s from '../styles/404.module.css'

const NotFound = () => {
    return (
        <MainWrapper>
            <div className={s.img_text}>
                <img src="/img/not_found.svg" />
                <h3>Page not found</h3>
            </div>
        </MainWrapper>
    )
}

export default NotFound
