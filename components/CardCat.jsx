import s from '../styles/CardCat.module.css'
import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'

const CardCat = (props) => {
   
    
        return (
            // <div className={props.horizontal ? s.cat_card_info : `${s.cat_card_info} ${s.horizontal}`}>
            <div className={classNames(s.cat_card_info, {
                [s.small]: props.small
            })}>
                <div className={`${s.cat_card_info_row} ${s.cat_card_info_row_1}`}>
                    <div className={s.cat_card_info_row_text}>
                        <h2 className={s.cat_card_info_row__title}>
                            {
                                props.name ? props.name : "QUEEN"
                            }
                            {
                                props.verefied ? <img src="/img/icon/checked.svg" alt="cat card info check icon" /> : null
                            }
                        </h2>
                        <div className={s.cat_card_info_row__sub_titles} >
                            <p>

                                {
                                    props.breed ? props.breed : "Maine Coon"
                                }
                            </p>
                            <p>
                            <Link href="/catteries/1">
                                <a>
                                    {
                                        props.cattery ? props.cattery : "Newlogica Cattery"
                                    }
                                </a>
                            </Link>
                            </p>
                        </div>
                    </div>
                    <Link href={`/catteries/1`}>
                        <a>
                            <div className={s.cat_card_info__icon} style={{ background: `url('${props.img_cattery}') 0/cover no-repeat` }}></div>
                        </a>           
                    </Link>
                </div>
                <div className={s.cat_card_info_img} style={{ "background": `url('${props.img_cat}') 0/cover no-repeat` }}>
                    <div >
                        <svg xmlns="http://www.w3.org/2000/svg" className={s.heart} throwIfNamespace="preserve" width="320px" height="260px" version="1.1" viewBox="0 -0.2 5.85 5.5" xlinkHref="http://www.w3.org/1999/xlink">
                            <defs>
                            </defs>
                            <g id="Layer_x0020_1">
                                <metadata id="CorelCorpID_0Corel-Layer" />
                                <path className={s.fil0} d="M2.92 0.82c0,0 0.51,-0.78 1.27,-0.82 0.96,-0.05 1.61,0.67 1.65,1.48 0.05,0.8 -0.68,1.61 -1.15,2.07 -0.98,0.99 -1.42,1.29 -1.76,1.62 -0.33,-0.33 -0.78,-0.62 -1.77,-1.61 -0.46,-0.46 -1.2,-1.26 -1.16,-2.07 0.05,-0.81 0.69,-1.53 1.65,-1.48 0.77,0.04 1.27,0.81 1.27,0.81z" />
                            </g>
                        </svg>
                    </div>
                </div>

                <div className={`${s.cat_card_info_row} ${s.cat_card_info_row_2}`}>
                    <div className={s.cat_card_info_row_text} >
                        <p><img src="/img/icon/date.svg" alt="" />{
                            props.age ? props.age : "5/2/21 (3 m YO)"
                        } </p>
                        <p><img src="/img/icon/gender.svg" alt="" />
                            {
                                props.female ? props.female : "Female"
                            }
                        </p>
                        <p><img src="/img/icon/color.svg" alt="" />
                            {
                                props.color ? props.color : "Chocolate Brown"
                            }

                        </p>
                        <p className={s.location} ><img src="/img/icon/coords.svg" alt="" />
                            {
                                props.location ? props.location : "Los Angeles, CA"
                            }
                        </p>
                    </div>
                    {
                        props.discount ?
                            (
                                <Link href="/kitty/1">
                                    <a className={`${s.cat_card_info_row__link} ${s.discount_link}`}>
                                        Buy With {props.discount}% Discount
                                    </a>
                                </Link>
                            ) :
                            (
                                <Link href="/kitty/1">
                                    <a className={s.cat_card_info_row__link}>
                                        Detail
                                    </a>
                                </Link>
                            )
                    }
                </div>
                <div className={s.show_more_text}>
                    <p></p>
                </div>
            </div>
        )
    
}


export default CardCat;
