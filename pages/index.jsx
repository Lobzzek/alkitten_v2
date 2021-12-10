import s from "../styles/home.module.css";
import React from 'react'
import MainWrapper from '../components/MainWrapper/MainWrapper.jsx'
import CardCat from '../components/CardCat.jsx'

export default function Home() {
  return (
    <MainWrapper>
        <div className={s.banner}>
          <div className={s.text}>
            <h3 >The Best Way to Find a</h3>
            <h2>NEW FAMILY MEMBER</h2>
            <button>SEARCH </button>
          </div>
          <img src="/img/cat_home.jpg" className={s.cat} alt="" />
        </div>
      <CardCat />
    </MainWrapper>
  )
}
