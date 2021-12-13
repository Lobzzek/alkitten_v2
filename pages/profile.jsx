import React from 'react'
import s from '../styles/profile.module.css'
import MainWrapper from '../components/MainWrapper/MainWrapper.jsx'

const Profile = () => {
    return (
        <MainWrapper>
            <div className={s.profile}>
                <div className={s.top_cnt}>
                    <button className={s.settings}>
                        <img src="/img/settings.svg" alt="" />
                    </button>
                    <div className={s.user_data}>
                        <div className={s.img}></div>
                        <div>
                            <h3>Lorem Ipsum <img src="/img/check.svg" alt="" /></h3>
                            <h4>ex@gmail.com</h4>
                        </div>
                    </div>
                    <div className={s.socials}>
                        <a href="#"><img src="/img/gmail.svg" alt="" /></a>
                        <a href="#"><img src="/img/facebook.svg" alt="" /></a>
                    </div>
                </div>
                <div className={s.bottom_cnt}>
                    <div className={s.detail}>
                        <h3>Profile details</h3>
                        <button>EDIT PROFILE</button>
                    </div>
                    <ul>
                        <li>
                            <h4>full name:</h4>
                            <h4>Lorem Ipsum</h4>
                        </li>
                        <li>
                            <h4>e-mail:</h4>
                            <h4>ex@gmail.com</h4>
                        </li>
                        <li>
                            <h4>number:</h4>
                            <h4>+380123456789</h4>
                        </li>
                        <li>
                            <h4>location:</h4>
                            <h4>Kyiv, Ukraine</h4>
                        </li>
                        <li>
                            <h4>looking for a breed:</h4>
                            <h4>American Bobtail, Bombino, Balinese</h4>
                        </li>
                        <li>
                            <h4>location of catteries:</h4>
                            <h4>Worldwide</h4>
                        </li>
                    </ul>
                </div>
            </div>
        </MainWrapper>
    )
}

export default Profile
