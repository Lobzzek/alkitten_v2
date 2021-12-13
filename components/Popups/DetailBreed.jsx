import React from 'react'
import s from '../../styles/Popups/DetailBreed.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setActivePopupBreeds } from '../../Redux/actions/activePopupBreeds.js'

const DetailBreed = () => {
    
    const active_popup_breeds = useSelector(state => state.active_popup_breeds);
    const current_breed = useSelector(state => state.active_breed.item[0]);

    const dispatch = useDispatch();
    const detail_breed = React.useRef();
    const fon = React.useRef();
    const cnt = React.useRef();

    React.useEffect(() => {
        if (active_popup_breeds.item){
            detail_breed.current.style.display = "flex";
            setTimeout(() => {
                fon.current.style.opacity = "1"
                cnt.current.style.transform = "translateY(0)"
                cnt.current.style.opacity = "1"
            }, 200);
        }else{
            fon.current.style.opacity = "0"
            cnt.current.style.transform = "translateY(30%)"
            cnt.current.style.opacity = "0"
            setTimeout(() => {
                detail_breed.current.style.display = "none";
            }, 650);
        }
    }, [active_popup_breeds])
    return (
        <div className={s.detail_breed} ref={detail_breed}>
            <div className={s.fon} ref={fon} onClick={() => dispatch(setActivePopupBreeds(false))}></div>
            <div className={s.cnt} ref={cnt}>
                <div className={s.top_cnt}>
                    <img src={current_breed.img} alt="" />
                    <ul>
                        <h2>{current_breed.name}</h2>
                        <li>
                            <h4>Height:</h4>
                            <h4>{current_breed.height}</h4>
                        </li>
                        <li>
                            <h4>Weight:</h4>
                            <h4>{current_breed.weight}</h4>
                        </li>
                        <li>
                            <h4>Life span:</h4>
                            <h4>{current_breed.life_span}</h4>
                        </li>
                        <li>
                            <h4>Good with:</h4>
                            <h4>{current_breed.good_with}</h4>
                        </li>
                        <li>
                            <h4>intelligence:</h4>
                            <h4>{current_breed.intelligence}</h4>
                        </li>
                        <li>
                            <h4>temperament:</h4>
                            <h4>{current_breed.temperament}</h4>
                        </li>
                    </ul>
                </div>
                <ul className={s.bottom_cnt}>
                    <li>
                        <h4>playfulness:</h4>
                        <h4>{current_breed.playfulness}</h4>
                    </li>
                    <li>
                        <h4>activity:</h4>
                        <h4>{current_breed.activity}</h4>
                    </li>
                    <li>
                        <h4>shedding:</h4>
                        <h4>{current_breed.shedding}</h4>
                    </li>
                    <li>
                        <h4>vocalness:</h4>
                        <h4>{current_breed.vocalness}</h4>
                    </li>
                    <li>
                        <h4>coat length:</h4>
                        <h4>{current_breed.coat_length}</h4>
                    </li>
                    <li>
                        <h4>patterns:</h4>
                        <h4>{current_breed.patterns}</h4>
                    </li>
                    <li>
                        <h4>colors:</h4>
                        <h4>{current_breed.colors}</h4>
                    </li>
                    <li>
                        <h4>other traits:</h4>
                        <h4>{current_breed.other_traits}</h4>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DetailBreed
