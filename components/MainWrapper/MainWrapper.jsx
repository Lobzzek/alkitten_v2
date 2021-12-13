import React from 'react'
import s from '../../styles/MainWrapper/MainWrapper.module.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

import DetailBreed from '../Popups/DetailBreed.jsx'
import Register from '../Popups/Register.jsx'

const MainWrapper = (props) => {
    const [activeRegister, setactiveRegister] = React.useState(true);
    const changeActiveRegister = (item) => setactiveRegister(item);

    return (
        <div className={s.main_wrapper} >
            <Header changeActiveRegister={changeActiveRegister} />
            <div className={s.main_cnt}>
                    {props.children}
            </div>
            <Footer />
            
            <Register changeActiveRegister={changeActiveRegister} activeRegister={activeRegister} />
            <DetailBreed />
        </div>
    )
}

export default MainWrapper
