import API from './api.jsx';
import { AddToken, AddId, AddLastName, AddFirstName } from './signUpSlice';
import { store } from "../service/store";

function getToken(data, navigate, dispatch){
    API
    .post(
        '/user/login',
        data 
        )
        .then(response => {
            console.log('Response data axiospost signup: ', response.data)
            console.log(response.data.body.token)
            if(response.status === 200){
                store.dispatch(AddToken(response.data.body.token))
                navigate('/user/profile')
            }
    return response.data
})
.catch(error => {console.log('Error data axiospost: ', error)})
}

function getUserData(token, dispatch){
    API
    .post(
        '/user/profile',
        token,
        {headers: {
            'Authorization': 'Bearer '  + token
        }} 
        )
        .then(response => {
            console.log('Response data axiospost profile: ', response)
        if(response.status === 200){
        //recupere nom + prenom
                store.dispatch(AddId(response.data.body.id))
                store.dispatch(AddFirstName(response.data.body.firstName))
                store.dispatch(AddLastName(response.data.body.lastName))
         }
    return response
})
.catch(error => {console.log('Error data axiospost: ', error)})
}

export {
    getToken,
    getUserData
};





