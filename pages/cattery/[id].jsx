import React from 'react'
import s from '../../styles/cattery/cattery.module.css'
import MainWrapper from '../../components/MainWrapper/MainWrapper.jsx'
import Link from 'next/link'
import SelectionCat from '../../components/Selections/SelectionCat.jsx'

import AllComments from '../../components/Comments/AllComments.jsx'

const Cattery = () => {
    const arr_starts = [0, 1, 2, 3, 4];

    return (
        <MainWrapper>
            <div className={s.top_cnt}>
                <div className={s.main_img}></div>
                <div className={s.data}>
                    <div>
                        <div className={`${s.row} ${s.cattery}`}>
                            <h2>Newlogica Cattery</h2>
                            <img src="/img/check.svg" alt="" />
                        </div>
                        <div className={`${s.row} ${s.rating_comments}`}>
                            <div className={s.rating}>
                                {
                                    arr_starts.map((el, index) =>
                                        <svg key={`stars1_${index}`} width="27" height="27" className={3 >= index + 1 ? s.active : undefined} viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className={s.f0} fillRule="evenodd" clipRule="evenodd" d="M11.5749 5.06582C9.81011 9.65547 9.74199 9.82033 9.61133 9.81952C9.2981 9.81745 0.432577 10.4239 0.247809 10.4601L0.0454102 10.4996L3.75057 13.7565C5.78836 15.5478 7.45568 17.045 7.45568 17.0836C7.45568 17.1222 6.91297 19.3595 6.24973 22.0554C5.58644 24.7512 5.05055 26.964 5.05884 26.9726C5.06713 26.9812 6.95516 25.7567 9.25439 24.2515L13.4349 21.5148L17.6176 24.2524C19.9181 25.758 21.8056 26.9841 21.8121 26.977C21.8212 26.9669 20.0266 19.6376 19.4836 17.4675L19.3779 17.0454L23.1038 13.7738C26.613 10.6924 26.8209 10.5001 26.6801 10.4653C26.5979 10.445 24.4109 10.2861 21.8201 10.1121L17.1096 9.79582L15.2869 5.05392C14.2844 2.44581 13.4504 0.311802 13.4336 0.311584C13.4168 0.311421 12.5804 2.45081 11.5749 5.06582Z" fill="#6D7B81" />
                                        </svg>
                                    )
                                }
                            </div>
                            <Link href="/cattery/1?comments"><a>(48)</a></Link>
                        </div>
                    </div>
                    <div>
                        <h4>Los Angeles, CA</h4>
                        <a href="#">www.usamainecoons.com</a>
                    </div>
                    <div className={s.row}>
                        <h4>BREEDS:&ensp;</h4>
                        <h4>Abyssinian Cat, American Bobtail Cat Breed, American Curl Cat Breed, Birman Cat Breed, British Shorthair Cat Breed, Abyssinian Cat, American Bobtail Cat Breed, American Curl Cat Breed, Birman Cat Breed, British Shorthair Cat Breed</h4>
                    </div>

                    <Link href="/cattery/1"><a>CONTACT CATTERY</a></Link>
                
                </div>
            </div>
            <div className={s.bottom_cnt}>
                <h4>
                    We are a breeder located in Temecula, CA, and specialize in Maine Coon kittens. We are family based cat breeders since 1992. We are located in California, near San Diego, and always happy to assist you, help you with any questions regards to Maine Coon Cats. Our kittens are raised in our house along with our kids, me and my husband; they are members of our family literally, you can come and see that they growing up in an atmosphere of kindness and love. We produce a variety of colors ranging from brown to silver to red and black smokes. Some of our kittens are also polydactyl. All of our kittens come current on their wormings, vaccinations and a health guarantee.
                </h4>
                <div className={s.media}>
                    <div className={s.vid}>
                        <svg width="85" height="97" viewBox="0 0 85 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M84.5527 48.6217L0.556671 96.5395L0.556671 0.703869L84.5527 48.6217Z" fill="#C4C4C4" />
                        </svg>
                    </div>
                    <div className={s.photos}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <SelectionCat title="Our cats" cards_in_group="4" data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
            
            <AllComments />
        </MainWrapper>
    )
}

export default Cattery
