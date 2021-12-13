import React from 'react'
import s from '../../styles/Seletion/SelectionCatteries.module.css'
import CardCatteries from '../CardCatteries.jsx'

const SelectionCatteries = (props) => {
    const [shownRow, setShownRow] = React.useState(1);
    const see_more = () => {
        if (shownRow * 3 < props.data.length) {
            setShownRow(shownRow + 1);
        } else {
            setShownRow(1);
        }
    }
    return (
        <div className={s.selection_catteries}>
            <h2>catteries for you</h2>
            <div className={s.blocks}>
                {
                    props.data.slice(0, shownRow * 3).map((el, i) =>
                        <CardCatteries
                            key={`cattery_${i}`}
                            rating="3.5"
                            verefied
                            liked
                            id_cattery="1"
                            name="Newlogica cattery"
                            location="Los Angeles, CA"
                            comments="48"
                            site="www.usamainecoons.com"
                            breeds="American Bobtail, American Bobtail, American Bobtail, American Bobtail"
                            description="We are a breeder located in Temecula, CA, and specialize in Maine Coon kittens. We are family based cat breeders since 1992. We are family based cat breeders since 1992. We are family based cat breeders since 1992."
                        />
                    )
                }
                
            </div>
            <button onClick={() => see_more()}>
                {
                    shownRow * 3 < props.data.length ? "see more" : ""
                }
            </button>
        </div>
    )
}

export default SelectionCatteries
