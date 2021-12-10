import React from 'react'
import s from '../../styles/MainWrapper/MainWrapper.module.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

const MainWrapper = (props) => {
    return (
        <div className={s.main_wrapper}>
            <Header />
            <div className={s.main_cnt}>
                    {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default MainWrapper
