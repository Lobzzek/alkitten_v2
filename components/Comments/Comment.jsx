import React from 'react'
import s from '../../styles/cattery/Comment.module.css'
import Link from 'next/link'
const Comment = () => {
    const arr_starts = [0, 1, 2, 3, 4];
    return (
        <div className={s.comment}>
            <div className={s.rating}>
                {
                    arr_starts.map((el, index) =>
                        <svg width="27" key={`stars4_${index}`} height="27" className={4 >= index + 1 ? s.active : undefined} viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className={s.f0} fillRule="evenodd" clipRule="evenodd" d="M11.5749 5.06582C9.81011 9.65547 9.74199 9.82033 9.61133 9.81952C9.2981 9.81745 0.432577 10.4239 0.247809 10.4601L0.0454102 10.4996L3.75057 13.7565C5.78836 15.5478 7.45568 17.045 7.45568 17.0836C7.45568 17.1222 6.91297 19.3595 6.24973 22.0554C5.58644 24.7512 5.05055 26.964 5.05884 26.9726C5.06713 26.9812 6.95516 25.7567 9.25439 24.2515L13.4349 21.5148L17.6176 24.2524C19.9181 25.758 21.8056 26.9841 21.8121 26.977C21.8212 26.9669 20.0266 19.6376 19.4836 17.4675L19.3779 17.0454L23.1038 13.7738C26.613 10.6924 26.8209 10.5001 26.6801 10.4653C26.5979 10.445 24.4109 10.2861 21.8201 10.1121L17.1096 9.79582L15.2869 5.05392C14.2844 2.44581 13.4504 0.311802 13.4336 0.311584C13.4168 0.311421 12.5804 2.45081 11.5749 5.06582Z" fill="#6D7B81" />
                        </svg>
                    )
                }
            </div>
            <div className={`${s.row} ${s.between}`}>
                <h3>Lorem Ipsum</h3>
                <div className={`${s.row} ${s.social}`}>
                    <button>
                        <img src="/img/share.svg" alt="" />
                    </button>
                    <button>
                        <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.77426 0.54917C6.36228 0.744644 5.21337 1.18063 4.17479 1.91516C2.56449 3.05398 1.40776 4.692 0.832321 6.64823C-0.20292 10.168 0.822192 13.8 4.04421 18.0275C4.6663 18.8437 6.72512 21.1019 7.61001 21.9386C9.16084 23.4049 10.8608 24.8128 12.6191 26.0872C14.2164 27.245 14.395 27.3247 14.8646 27.0906C15.2223 26.9122 17.3494 25.341 18.4417 24.4485C20.4168 22.8346 21.8245 21.5038 23.3512 19.8077C26.2618 16.5739 27.8428 13.7348 28.3403 10.8484C28.4775 10.0521 28.4772 8.51514 28.3397 7.75255C27.688 4.13865 25.2608 1.45868 21.9332 0.678692C21.1948 0.505619 19.6613 0.492393 18.9182 0.652775C17.4097 0.978306 16.0976 1.68471 14.9332 2.79828L14.4544 3.25625L13.9477 2.77564C13.669 2.51129 13.272 2.17158 13.0653 2.02067C12.1861 1.37873 11.0097 0.858675 9.98212 0.65772C9.50512 0.564482 8.14641 0.497636 7.77426 0.54917ZM9.33649 2.48186C11.0457 2.74055 12.4395 3.613 13.5889 5.14366C13.9335 5.60246 14.1488 5.75456 14.4539 5.75456C14.7621 5.75456 14.9774 5.60234 15.3087 5.15003C15.993 4.21616 16.7047 3.59143 17.6388 3.10486C20.8043 1.45594 24.5676 2.90611 26.0873 6.36041C27.5109 9.59635 26.5181 13.1671 23.0025 17.4556C21.1463 19.7197 17.9902 22.5885 14.9336 24.7897L14.455 25.1343L13.6743 24.5645C8.59625 20.8589 4.68414 16.6363 3.11929 13.1719C1.97515 10.639 1.89625 8.42137 2.87335 6.26097C3.23953 5.45126 3.57608 4.9635 4.23704 4.28461C5.59806 2.88663 7.52055 2.20703 9.33649 2.48186Z" fill="black" />
                        </svg>
                    </button>
                </div>
            </div>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. commodo consequat.</h4>
                <div className={`${s.row} ${s.between}`}>
                    <div>
                        <h4>Queen, Maine Coon</h4>
                        <h4>06/10/21 - <Link href="/"><a>User Name</a></Link></h4>
                    </div>
                    <a href="#"><img src="/img/facebook.svg" alt="" /></a>
                </div>
        </div>
    )
}

export default Comment
