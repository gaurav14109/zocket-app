import {useState} from 'react'
import { Redirect } from 'react-router-dom'
import {userRegister} from '../requests/user'

const Loginform = () => {
    const [formData, setFormData] = useState({email: '', password: ''})

    const [refresh, setRefresh] = useState(false)

    const {email, password} = formData

    const handleOnChange = e => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = e => {
        e.preventDefault();

        userRegister(formData, function() {
            setRefresh(true)
            setFormData({email: '', name:'', password:''})
        })
    }

    if (refresh) {
       return <Redirect to="/"/>
    }

    return (
        <section className="user-registeration-form">

            <h2>Login form</h2>
            <p>Kindly Login to Your account</p>

            <div className="register">

                <form onSubmit={(e) => onSubmit(e)}>

                    <div>
                        <h4>Email</h4>
                        <input type="email" name="email" value={email} onChange={e => handleOnChange(e)}/>
                    </div>
                    <div>
                        <h4>password</h4>
                        <input type="password" name="password" value={password} onChange={e => handleOnChange(e)} />
                    </div>
                    <button type="submit">Signup</button>
                </form>
            </div>
        </section>
    )
}

export default Loginform