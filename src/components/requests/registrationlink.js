import axios from 'axios';

export const registrationlink = async (email,next) =>{

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify(email)
    try{
     await axios.post('http://localhost:8080/api/users/registerationlink', body, config)
    

    next()
    }catch(err){
        console.log(err)
    }

}