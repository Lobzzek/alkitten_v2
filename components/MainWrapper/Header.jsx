import React from 'react'
import s from '../../styles/MainWrapper/Header.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'

const Header = () => {
    const router = useRouter();
    console.log(router)
    return (
        <div className={s.header}>
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
                    <button className={s.user}>
                        <img src="/img/menu_3_lines.svg" alt="" />
                        <img src="/img/user.svg" alt="" />
                    </button>
                </nav>
                
            </div>
        </div>
    )
}

export default Header
