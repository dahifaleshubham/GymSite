import React, { useState } from 'react'
import style from "./SignUp.module.css"




function SignUp() {

    // const [user, setUser] = useState({
    //     name: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: ""
    // });

    const [name, setName] = useState('');
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [confirmPassword, setConfirmPassword] = useState('')

//    useEffect(()=>{
//     localStorage.setUser("users",JSON.stringify(user));
//    }, [user])

    const onSubmit = (event) => {
        event.preventDefault()
        localStorage.setItem("Name", name)
        alert("Register successfully")

    }
    return (
        <>
            <div className={style.container}>

                <form >
                    <div className={style.element}>
                        <label >FullName
                            <input className={style.name} value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text" placeholder='enter name'></input>
                        </label> <br />
                        <label>Email
                            <input className={style.name} type="text" placeholder='enter email'></input>
                        </label> <br />
                        <label>Password
                            <input className={style.name} type="password" placeholder='enter Password'></input>
                        </label> <br />
                        <label>Conform Password
                            <input className={style.name} type="password" placeholder=' conform password'></input>
                        </label> <br />
                        <button className={style.submit} onClick={onSubmit} type='submit' > Submit</button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default SignUp
