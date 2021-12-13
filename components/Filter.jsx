import React from 'react'
import s from '../styles/Filter.module.css'
import cn from 'classnames'
import jsonCats from '../_data_cats'

const Filter = (props) => {
    const [activeSortGroup, setActiveSortGroup] = React.useState(null);
    const filter = React.useRef();
    const hidden_cnt = React.useRef();
    const [sortCats, setSortCats] = React.useState({
        breeds: 0,
        agegroup: 0,
        availability: 0,
        location: 0,
        gender: 0,
        sort: 0
    });
    const [sortBreeds, setSortBreeds] = React.useState({
        longhair: 0,
        shorthair: 0,
        siamese: 0,
    });
    const [sortCatteries, setSortCatteries] = React.useState({
        breed: 0,
        hair: 0,
        location: 0,
    });
    const activeSortCats = (categories, index) => {
        setSortCats({ ...sortCats, [categories]: index })
    }
    const activeSortBreeds = (categories, index) => {
        setSortBreeds({ ...sortBreeds, [categories]: index })
    }
    const activeSortCatteries = (categories, index) => {
        setSortCatteries({ ...sortCatteries, [categories]: index })
    }

    const showHiddenCnt = () => {
        hidden_cnt.current.style.display = "block";
        setTimeout(() => {
            hidden_cnt.current.classList.add(s.active);
        }, 50);
    }
    const hideHiddenCnt = () => {
        hidden_cnt.current.classList.remove(s.active);
        setTimeout(() => {
            hidden_cnt.current.style.display = "none";
        }, 600);
    }

    React.useEffect(() => {
        if (typeof activeSortGroup === "number"){
            filter.current.addEventListener("mouseenter", showHiddenCnt);
            filter.current.addEventListener("mouseleave", hideHiddenCnt);
        }
    }, [activeSortGroup])


    

    return (
        <div className={s.filter} ref={filter}>
            <div className={s.see_cnt}>
                <button onClick={() => {
                    setActiveSortGroup(0)
                    showHiddenCnt();
                    }} className={activeSortGroup === 0 || activeSortGroup === 1 ? `${s.cats} ${s.no_border}` : s.cats}>
                    <p>CATS</p>
                    <p>Lorem ipsum dolor sit?</p>
                </button>
                <button onClick={() => { 
                    setActiveSortGroup(1) 
                    showHiddenCnt();
                    }} className={activeSortGroup === 1 || activeSortGroup === 2 ? `${s.breeds} ${s.no_border}` : s.breeds}>
                    <p>BREEDS</p>
                    <p>Lorem ipsum dolor sit?</p>
                </button>
                <button onClick={() => { 
                    setActiveSortGroup(2) 
                    showHiddenCnt();
                    }} className={activeSortGroup === 2 ? `${s.catteries} ${s.no_border}` : s.catteries}>
                    <p>CATTERIES</p>
                    <p>Lorem ipsum dolor sit?</p>
                </button>
                <button className={s.search} onClick={() => {
                    hideHiddenCnt();
                    props.showGroup(activeSortGroup)
                }
                } >
                    <span>SEARCH</span>
                    <img src="/img/loup.svg" alt="" />
                </button>
                <div className={cn(s.thumb, { [s.first]: activeSortGroup === 0, 
                                              [s.second]: activeSortGroup === 1,
                                              [s.third]: activeSortGroup === 2
                }) }>
                </div>
            </div>
            <div className={s.hidden_cnt} ref={hidden_cnt}>

                <div className={ cn(`${s.block_filter} ${s.cats_filter}`, { [s.active]: activeSortGroup === 0})}>
                     <div>
                         <h4>Shorthair breeds</h4>
                         <ul className={s.scroll}>
                            <li onClick={() => activeSortCats("breeds", 0)} className={sortCats.breeds === 0 ? s.active : undefined}>All</li>
                             {jsonCats.short_hair.map((el, i) => 
                                 <li key={`breed_${el.name}_${i}`} 
                                     onClick={() => activeSortCats("breeds", i + 1)}
                                    className={sortCats.breeds === i + 1 ? s.active : undefined} >{el.name}</li>
                             )}
                         </ul>
                     </div>
                     <div>
                         <h4>Agegroup</h4>
                         <ul>
                            <li onClick={() => activeSortCats("agegroup", 0)} className={sortCats.agegroup === 0 ? s.active : undefined}>All Ages</li>
                            <li onClick={() => activeSortCats("agegroup", 1)} className={sortCats.agegroup === 1 ? s.active : undefined}>4+ weeks</li>
                            <li onClick={() => activeSortCats("agegroup", 2)} className={sortCats.agegroup === 2 ? s.active : undefined}>1-2 months</li>
                            <li onClick={() => activeSortCats("agegroup", 3)} className={sortCats.agegroup === 3 ? s.active : undefined}>2-6 months</li>
                            <li onClick={() => activeSortCats("agegroup", 4)} className={sortCats.agegroup === 4 ? s.active : undefined}>1-3 years</li>
                            <li onClick={() => activeSortCats("agegroup", 5)} className={sortCats.agegroup === 5 ? s.active : undefined}>3-5 years</li>
                            <li onClick={() => activeSortCats("agegroup", 6)} className={sortCats.agegroup === 6 ? s.active : undefined}>5+ years</li>
                         </ul> 
                     </div>
                     <div>
                        <h4>Availability</h4>
                        <ul>
                            <li onClick={() => activeSortCats("availability", 0)} className={sortCats.availability === 0 ? s.active : undefined}>All Avalability</li>
                            <li onClick={() => activeSortCats("availability", 1)} className={sortCats.availability === 1 ? s.active : undefined}>Kitties for Sale</li>
                            <li onClick={() => activeSortCats("availability", 2)} className={sortCats.availability === 2 ? s.active : undefined}>Kitties for Adoption</li>
                            <li onClick={() => activeSortCats("availability", 3)} className={sortCats.availability === 3 ? s.active : undefined}>Retired Breeding Cats</li>
                            <li onClick={() => activeSortCats("availability", 4)} className={sortCats.availability === 4 ? s.active : undefined}>Retired Breeding Cats</li>
                            <li onClick={() => activeSortCats("availability", 5)} className={sortCats.availability === 5 ? s.active : undefined}>Breeding Cats</li>
                        </ul>
                     </div>
                     <div>
                        <h4>Location</h4>
                        <ul>
                            <li onClick={() => activeSortCats("location", 0)} className={sortCats.location === 0 ? s.active : undefined}>All States</li>
                            <li onClick={() => activeSortCats("location", 1)} className={sortCats.location === 1 ? s.active : undefined}>Worldwide</li>
                            <li onClick={() => activeSortCats("location", 2)} className={sortCats.location === 2 ? s.active : undefined}>Specific (Map)</li>
                        </ul>
                     </div>
                     <div>
                        <h4>Gender</h4>
                        <ul>
                            <li onClick={() => activeSortCats("gender", 0)} className={sortCats.gender === 0 ? s.active : undefined}>All</li>
                            <li onClick={() => activeSortCats("gender", 1)} className={sortCats.gender === 1 ? s.active : undefined}>Female</li>
                            <li onClick={() => activeSortCats("gender", 2)} className={sortCats.gender === 2 ? s.active : undefined}>Male</li>
                        </ul>
                     </div>
                     <div>
                        <h4>Sort by</h4>
                        <ul>
                            <li onClick={() => activeSortCats("sort", 0)} className={sortCats.sort === 0 ? s.active : undefined}>Low Price First</li>
                            <li onClick={() => activeSortCats("sort", 1)} className={sortCats.sort === 1 ? s.active : undefined}>High Prise First</li>
                            <li onClick={() => activeSortCats("sort", 2)} className={sortCats.sort === 2 ? s.active : undefined}>Newest First</li>
                        </ul>
                        <div className={s.photo_only}>
                            <input type="checkbox" id="photo" />
                            <label htmlFor="photo">With Photos Only</label>
                        </div>
                    </div>
                </div>

                <div className={cn(`${s.block_filter} ${s.breeds_filter}`, { [s.active]: activeSortGroup === 1 })}>
                    <div className={s.search_row}>
                        <input type="text" placeholder="Lorem ipsum dolor sit?" />
                        <button>
                            <img src="/img/loup.svg" alt="" />
                        </button>
                        
                    </div>
                    <div className={s.panels}>
                        <div>
                            <h4>Longhair Breeds</h4>
                            <ul className={s.scroll}>
                                <li className={sortBreeds.longhair === 0 ? s.active : undefined}
                                    onClick={() => activeSortBreeds("longhair", 0)}
                                >All</li>
                                {
                                    jsonCats.long_hair.map((el, i) => 
                                        <li key={`longhair_${el.name}_${i}`} 
                                            className={sortBreeds.longhair === i + 1 ? s.active : undefined}
                                            onClick={() => activeSortBreeds("longhair", i + 1)}
                                            >
                                            {el.name}
                                        </li>
                                    )
                                }
                            </ul>

                        </div>
                        <div>
                            <h4>Shorthair Breeds</h4>
                            <ul className={s.scroll}>
                                <li
                                    className={sortBreeds.short_hair === 0 ? s.active : undefined}
                                    onClick={() => activeSortBreeds("shorthair", 0)}
                                    >All</li>
                                {
                                    jsonCats.short_hair.map((el, i) =>
                                        <li key={`short_hair_${el.name}`}
                                            className={sortBreeds.shorthair === i + 1 ? s.active : undefined}
                                            onClick={() => activeSortBreeds("shorthair", i + 1)}
                                        >
                                            {el.name}
                                        </li>
                                    )
                                }
                            </ul>

                        </div>
                        <div>
                            <h4>Siamese &amp; Oriental</h4>
                            <ul className={s.scroll}>
                                <li
                                    className={sortBreeds.siamese === 0 ? s.active : undefined}
                                    onClick={() => activeSortBreeds("siamese", 0)}
                                >All</li>
                                {
                                    jsonCats.siamese_and_oriental.map((el, i) =>
                                        <li key={`siamese_${el.name}`}
                                            className={sortBreeds.siamese === i + 1 ? s.active : undefined}
                                            onClick={() => activeSortBreeds("siamese", i + 1)}
                                        >
                                            {el.name}
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={cn(`${s.block_filter} ${s.catteries_filter}`, { [s.active]: activeSortGroup === 2 })}>
                    <div className={s.search_row}>
                        <input type="text" placeholder="Lorem ipsum dolor sit?" />
                        <button>
                            <img src="/img/loup.svg" alt="" />
                        </button>
                        
                    </div>
                    <div className={s.panels}>
                        <div>
                            <h4>Breed</h4>
                            <ul className={s.scroll}>
                                <li className={sortCatteries.breed === 0 ? s.active : undefined}
                                    onClick={() => activeSortCatteries("breed", 0)}
                                >All</li>
                                {
                                    jsonCats.long_hair.map((el, i) =>
                                        <li key={`breeds_${el.name}_${i}`}
                                            className={sortCatteries.breed === i + 1 ? s.active : undefined}
                                            onClick={() => activeSortCatteries("breed", i + 1)}
                                        >
                                            {el.name}
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        <div>
                            <h4>Hair</h4>
                            <ul>
                                <li className={sortCatteries.hair === 0 ? s.active : undefined} onClick={() => activeSortCatteries("hair", 0)}>All</li>
                                <li className={sortCatteries.hair === 1 ? s.active : undefined} onClick={() => activeSortCatteries("hair", 1)}>Longhair Breeds</li>
                                <li className={sortCatteries.hair === 2 ? s.active : undefined} onClick={() => activeSortCatteries("hair", 2)}>Shorthair Breeds</li>
                                <li className={sortCatteries.hair === 3 ? s.active : undefined} onClick={() => activeSortCatteries("hair", 3)}>Siamese &amp; Oriental</li>
                            </ul>
                        </div>
                        <div>
                            <h4>LOCATION</h4>
                            <ul>
                                <li className={sortCatteries.location === 0 ? s.active : undefined} onClick={() => activeSortCatteries("location", 0)}>All</li>
                                <li className={sortCatteries.location === 1 ? s.active : undefined} onClick={() => activeSortCatteries("location", 1)}>Worldwide</li>
                                <li className={sortCatteries.location === 2 ? s.active : undefined} onClick={() => activeSortCatteries("location", 2)}>Specific (Map)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter
