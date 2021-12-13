import React from 'react'
import s from '../styles/CardBreeds.module.css'
import Link from 'next/link'

import jsonCats from '../_data_cats.js'
import { useDispatch } from 'react-redux'
import { setActiveBreed } from '../Redux/actions/activeBreed.js'
import { setActivePopupBreeds } from '../Redux/actions/activePopupBreeds.js'


const CatdBreeds = (props) => {
    
    const dispatch = useDispatch();
    const all_breeds = [...jsonCats.long_hair, ...jsonCats.short_hair, ...jsonCats.siamese_and_oriental];

    return (
        <div className={s.card_breeds}>
            <div className={s.img_cat} style={{ background: props.img1 ? "#f2efe8" : "url(/img/empty_img.jpg) center/cover no-repeat"}}>
                {
                    props.img1 && 
                    (
                        <>
                            <img src={props.img2} alt="" />
                            <img src={props.img1} alt="" />
                        </>
                    )
                }
            </div>
            <div className={s.text_info}>
                <h4 className={s.name}>{props.name ? props.name : "..."}</h4>
                <button className={s.info} onClick={() => {
                    dispatch(setActiveBreed(all_breeds.find(el => el.name === props.name)))
                    dispatch(setActivePopupBreeds(true))
                }}>
                    <img src="/img/info.svg" alt="" />
                </button>
            </div>
            <Link href="/"><a>Show 21 kittens</a></Link>
        </div>
    )
}

export default CatdBreeds
