import React from 'react'
import s from '../../styles/Seletion/SelectionCats.module.css'
import CardCat from '../CardCat.jsx'

const SelectionCat = (props) => {
    const [shownRow, setShownRow] = React.useState(1);
    const cards_in_group = Number(props.cards_in_group);
    const see_more = () => {
    if (shownRow * cards_in_group < props.data.length) {
            setShownRow(shownRow + 1);
        } else {
            setShownRow(1);
        }
    }
    return (
        <div className={s.selection_cat}>
            <h2>{props.title}</h2>
            <div className={s.blocks}>
                {
                    props.data.slice(0, shownRow * cards_in_group).map((el, i) => <CardCat
                        key={`cat_${i}`}
                        name="Queen"
                        img="/img/cat_2_gallery.jpg"
                        date="/5/2/21 (3m YO)"
                        breed="Maine Coon"
                        cattery="Newlogica Cattery"
                        id_cattery="1"
                        gender="Female"
                        color="Chocolate Brown"
                        location="Los Angeles, CA"
                        id_kitty="1" />)
                }
            </div>
            <button onClick={() => see_more()}>
                {
                    shownRow * cards_in_group < props.data.length ? "see more" : ""
                }
            </button>
        </div>
    )
}

export default SelectionCat
