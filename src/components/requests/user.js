import axios from 'axios';

export const userRegister = async (data,next) =>{

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify(data)
    try{
    const res= await axios.post('http://localhost:8080/api/users/register', body, config)
    localStorage.setItem('token',res.data.token)
    next()
    }catch(err){
        console.log(err)
    }

}