import styles from '../styles/AllDone.module.css';
import { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setUser, quizStatus, QUIZSTATUS } from '../store/timer'
import Router from 'next/router';



function Done() {


    const dispatch = useDispatch();


    const { user, score, status } = useSelector((state) => state.time)
    useEffect(() => {
        if (status === QUIZSTATUS.DEFAULT) {
            Router.push('/play')
        }

    }, [status])


    const inputEl = useRef();


    dispatch(quizStatus(QUIZSTATUS.COMPLETED))

    const addUser = () => {
        if (inputEl.current.value === "") {
            alert('Please Enter Your Name ');
        } else {

            let newUser = { id: user.length, name: inputEl.current.value, score: score }
            dispatch(setUser(newUser));
            console.log("users : " + user);
            Router.push('/viewScore')
        }
    }

    return (
        <div className={styles.container}>

            <div className={styles.allDone} >
                <h3 className={styles.h3} style=
                    {{ fontWeight: "bolder" }}>All Done!</h3>
                <div>
                    <p className={styles.els}>Your final score is <span>{score}</span></p>
                    <p className={styles.els}>Enter initials:</p>
                    <input type="text" ref={inputEl} className={styles.user} required />
                    {/* <Link href={'/viewScore'}> */}
                    <button className={styles.submitBtn} onClick={() => {
                        addUser();
                        inputEl.current.focus();

                    }}>submit</button>
                    {/* </Link> */}

                </div>
            </div>
        </div>
    )
}

export default Done