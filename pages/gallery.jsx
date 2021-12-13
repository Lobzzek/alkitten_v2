import React from 'react'
import MainWrapper from '../components/MainWrapper/MainWrapper.jsx'
import SilverTitle from '../components/SilverTitle.jsx'
import s from '../styles/gallery.module.css'

const Gallery = () => {

    const phots_arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
    const [shownRow, setShownRow] = React.useState(1);
    const see_more = () => {
        if (shownRow * 12 < phots_arr.length) {
            setShownRow(shownRow + 1);
        } else {
            setShownRow(1);
        }
    }

    return (
        <MainWrapper>
            <SilverTitle width="1400" margin_bottom="75">
                <h2>CAT GALLERY</h2>
                <p>A happy place for cats and catparents</p>
            </SilverTitle>
            <div className={s.photos}>
                {
                    phots_arr.slice(0, shownRow * 12).map((el, index) => <div key={`${index}_ph`}></div>)
                }
            </div>
            <button className={s.see_more} onClick={() => see_more()}>
                {
                    shownRow * 12 < phots_arr.length ? "see more" : ""
                }
            </button>
        </MainWrapper>
    )
}

export default Gallery
