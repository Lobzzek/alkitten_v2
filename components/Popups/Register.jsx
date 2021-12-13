import React from 'react'
import s from '../../styles/Popups/Register.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setActivePopupRegister } from '../../Redux/actions/activePopupRegister.js'

const Register = (props) => {

    const active_popup_register = useSelector(state => state.active_popup_register);

    const dispatch = useDispatch();

    const register = React.useRef();
    const fon = React.useRef();
    const cnt = React.useRef();

    React.useEffect(() => {
        if (active_popup_register.item) {
            register.current.style.display = "flex";
            setTimeout(() => {
                fon.current.style.opacity = "1"
                cnt.current.style.transform = "translateY(0)"
                cnt.current.style.opacity = "1"
            }, 200);
        } else {
            fon.current.style.opacity = "0"
            cnt.current.style.transform = "translateY(30%)"
            cnt.current.style.opacity = "0"
            setTimeout(() => {
                register.current.style.display = "none";
            }, 650);
        }
    }, [active_popup_register])

    return (
        <div className={s.register} ref={register}>
            <div className={s.fon} ref={fon} onClick={() => dispatch(setActivePopupRegister(false))}></div>
            <div className={s.cnt} ref={cnt}>
                <div className={s.current}>
                    <button className={props.activeRegister ? s.active : undefined} onClick={() => props.changeActiveRegister(!props.activeRegister)}>SING UP</button>
                    <button className={!props.activeRegister ? s.active : undefined} onClick={() => props.changeActiveRegister(!props.activeRegister)}>LOG IN</button>
                </div>
                <div className={s.dynamic}>
                    {
                        props.activeRegister ?
                        (
                            <>
                                <input type="text" placeholder="Email adress *" />
                                <input type="text" placeholder="Password *" />
                                <p className={s.policy}>
                                        Your personal data will be used to support your experience throughout this website, 
                                        to manage access to your account, and for other purposes described in our <a href="#">privacy policy.</a>
                                </p>
                                <button className={s.reg}>SING UP</button>
                                <p className={s.rev_account}>Already have an account? <span onClick={() => props.changeActiveRegister(!props.activeRegister)}>Log in</span></p>
                            </>
                        ) :
                        (
                            <>
                                <input type="text" placeholder="Email adress *" />
                                <input type="text" placeholder="Password *" />
                                <div className={s.row}>
                                    <div>
                                        <input type="checkbox" id="remember" />
                                        <label htmlFor="remember">Remember Me</label>
                                    </div>
                                    <a href="#">Lost your password?</a>
                                </div>
                                <button className={s.reg}>LOG IN</button>
                                <p className={s.rev_account}>Not a member yet? <span onClick={() => props.changeActiveRegister(!props.activeRegister)}>Sing up</span></p>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Register
