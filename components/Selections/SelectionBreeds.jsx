import React from 'react'
import s from '../../styles/Seletion/SelectionBreeds.module.css'
import CatdBreeds from '../CatdBreeds.jsx'

const SelectionBreeds = (props) => {
    const data = props.data;
    const pick_breeds = [...data.long_hair, ...data.short_hair, ...data.siamese_and_oriental]

    const [shownRow, setShownRow] = React.useState(1);
    const see_more = () => {
        if (shownRow * 15 < pick_breeds.length) {
            setShownRow(shownRow + 1);
        } else {
            setShownRow(1);
        }
    }
    return (
        <div className={s.selection_breeds}>
            <div className={s.blocks}>
                {
                    pick_breeds.slice(0, shownRow * 15).map((el, i) => 
                        <CatdBreeds key={`breeds_${i}_${el.name}`} img1={el.img} img2={el.img.replace("1.jpg", "2.jpg")} name={el.name} />
                    )
                }
            </div>
            <button onClick={() => see_more()}>
                {
                    shownRow * 15 < pick_breeds.length ? "see more" : ""
                }
            </button>

            

        </div>
    )
}

export default SelectionBreeds
