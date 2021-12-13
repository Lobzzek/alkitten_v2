import React from 'react'
import Comment from './Comment.jsx'
import s from '../../styles/cattery/AllComents.module.css'

const AllComments = () => {
    const [shownRow, setShownRow] = React.useState(1);
    const arr_comments = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const see_more = () => {
        if (shownRow * 4 < arr_comments.length) {
            setShownRow(shownRow + 1);
        } else {
            setShownRow(1);
        }
    }

    return (
        <div className={s.all_commnets}>
            <div className={s.statistic}>
                <div className={s.b1}>
                    <h3>Reviews <span>(48)</span></h3>
                </div>
                <div className={s.b2}>
                    <ul>
                        <li>
                            <div className={s.group}>
                                <input type="checkbox" id="category0" />
                                <label htmlFor="category0">Excellent</label>
                            </div>
                            <div className={s.bar}>
                                <div className={s.thumb}></div>
                            </div>
                            <h4 className={s.progress}>50%</h4>
                        </li>
                        <li>
                            <div className={s.group}>
                                <input type="checkbox" id="category1" />
                                <label htmlFor="category1">Great</label>
                            </div>
                            <div className={s.bar}>
                                <div className={s.thumb}></div>
                            </div>
                            <h4 className={s.progress}>50%</h4>
                        </li>
                        <li>
                            <div className={s.group}>
                                <input type="checkbox" id="category2" />
                                <label htmlFor="category2">Average</label>
                            </div>
                            <div className={s.bar}>
                                <div className={s.thumb}></div>
                            </div>
                            <h4 className={s.progress}>50%</h4>
                        </li>
                        <li>
                            <div className={s.group}>
                                <input type="checkbox" id="category3" />
                                <label htmlFor="category3">Poor</label>
                            </div>
                            <div className={s.bar}>
                                <div className={s.thumb}></div>
                            </div>
                            <h4 className={s.progress}>50%</h4>
                        </li>
                        <li>
                            <div className={s.group}>
                                <input type="checkbox" id="category4" />
                                <label htmlFor="category4">Bad</label>
                            </div>
                            <div className={s.bar}>
                                <div className={s.thumb}></div>
                            </div>
                            <h4 className={s.progress}>50%</h4>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={s.comments}>
                {
                    arr_comments.slice(0, shownRow * 4).map((el, index) => <Comment key={`comment_${index}`} />)
                }
            </div>  
            <button onClick={() => see_more()}>
                {
                    shownRow * 4 < arr_comments.length ? "see more" : ""
                }
            </button>
        </div>
    )
}

export default AllComments
