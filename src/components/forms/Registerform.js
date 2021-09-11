import {useState} from 'react'
import { Redirect } from 'react-router-dom'
import {userRegister} from '../requests/user'

const RegistrationForm = () => {
    const [formData, setFormData] = useState({email: '', name: '', password: ''})

    const [refresh, setRefresh] = useState(false)

    const {email, name, password} = formData

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
       return <Redirect to="/login"/>
    }

    return (
        <section className="user-registeration-form">

            <h2>Registeration form</h2>
            <p>Kindly register to gain access</p>

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
                    <div>
                        <h4>Name</h4>
                        <input type="text" name="name" value={name} onChange={e => handleOnChange(e)} />
                    </div>

                    <button type="submit">Signup</button>
                </form>
            </div>
        </section>
    )
}

export default RegistrationForm