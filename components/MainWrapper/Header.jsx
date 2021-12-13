import React from 'react'
import s from '../../styles/MainWrapper/Header.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'

import { useDispatch } from 'react-redux'
import { setActivePopupRegister } from '../../Redux/actions/activePopupRegister.js'

const Header = (props) => {
    const router = useRouter();
    const user_panel = React.useRef();
    const dispatch = useDispatch();

    const [showUserPanel, setShowUserPanel] = React.useState(false);

    React.useEffect(() => {
        if (showUserPanel === true) {
            user_panel.current.style.display = "flex";
            setTimeout(() => {
                user_panel.current.classList.add(s.active);
            }, 100);
        }else{
            user_panel.current.classList.remove(s.active);
            setTimeout(() => {
                user_panel.current.style.display = "none";
            }, 450);
        }
    }, [showUserPanel])

    return (
        <div className={s.header} onMouseLeave={() => setShowUserPanel(false)}>
            <input type="checkbox"/>
            <div className={s.cnt}>
                <Link href="/">
                    <a>
                        <img src="/img/logo.svg" className={s.logo} alt="" />
                    </a>
                </Link>
                <nav>
                    <div className={s.links}>
                        <Link href="/"><a className={cn("", { [s.active]: router.pathname === "/" })}>HOME</a></Link>
                        <Link href="/gallery"><a className={cn("", { [s.active]: router.pathname === "/gallery" })}>GALLERY</a></Link>
                        <Link href="/faq"><a className={cn("", { [s.active]: router.pathname === "/faq" })}>FAQ/GUIDE</a></Link>
                    </div>
                    <button className={s.user} onClick={() => setShowUserPanel(true)}>
                        <img src="/img/menu_3_lines.svg" alt="" />
                        <img src="/img/user.svg" alt="" />
                    </button>

                    <div className={s.user_panel} ref={user_panel}>
                        <button className={s.sing_up} onClick={() => { 
                            dispatch(setActivePopupRegister(true))
                            props.changeActiveRegister(true)
                        }}>SING UP</button>
                        <button className={s.log_in} onClick={() => { 
                            dispatch(setActivePopupRegister(true))
                            props.changeActiveRegister(false)
                        }}>LOG IN</button>
                    </div>
                </nav>
                
            </div>
        </div>
    )
}

export default Header
