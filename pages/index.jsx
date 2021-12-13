import s from "../styles/home.module.css";
import React from 'react'
import MainWrapper from '../components/MainWrapper/MainWrapper.jsx'
import CardCat from '../components/CardCat.jsx'
import Filter from '../components/Filter.jsx'

import SelectionCat from "../components/Selections/SelectionCat.jsx";
import SelectionBreeds from '../components/Selections/SelectionBreeds.jsx'
import SelectionCatteries from '../components/Selections/SelectionCatteries.jsx'

import jsonCats from '../_data_cats.js'

export default function Home() {
  const  test_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [shownRow, setShownRow] = React.useState(1);
  const see_more = () => {
    if (shownRow * 4 < test_arr.length){
      setShownRow(shownRow + 1);
    }else{
      setShownRow(1);
    }
  }
  const [visibleGroup, setVisibleGroup] = React.useState(null);
  const showGroup = (item) => {
      setVisibleGroup(item)
  }

  const arrCardCat = test_arr.map((el, i) => <CardCat key={`${i}_last_kitty`} liked name="Queen"
    date="/5/2/21 (3m YO)"
    breed="Maine Coon"
    cattery="Newlogica Cattery"
    id_cattery="1"
    gender="Female"
    color="Chocolate Brown"
    location="Los Angeles, CA"
    id_kitty="1" />
  )

  return (
    <MainWrapper>
        <Filter showGroup={showGroup} />
        {
            typeof visibleGroup !== "number" && (
                <>
                <div className={s.banner}>
                  <div className={s.text}>
                    <h3 >The Best Way to Find a</h3>
                    <h2>NEW FAMILY MEMBER</h2>
                    <button>SEARCH </button>
                  </div>
                  <img src="/img/cat_home.jpg" className={s.cat} alt="" />
                </div>
                <div className={s.last_kitties}>
                  <h2>Recently Viewed Kittens</h2>
                  <div className={s.blocks}>
                    {
                      test_arr.slice(0, shownRow * 4).map((el, i) => <CardCat key={`${i}_last_kitty`} liked name="Queen"
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
                      shownRow * 4 < test_arr.length ? "see more" : ""
                    }
                  </button>
                </div>
                </>
            )
        }
        {
        visibleGroup === 0 ? <SelectionCat title="kittens for you" cards_in_group="8" data={test_arr} /> : visibleGroup === 1 ? <SelectionBreeds data={jsonCats} /> : visibleGroup === 2 ? <SelectionCatteries data={test_arr} /> : null
        }
        
        
    </MainWrapper>
  )
}
