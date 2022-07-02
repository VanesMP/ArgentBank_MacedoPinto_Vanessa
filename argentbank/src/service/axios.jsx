import API from './api.jsx';
import { AddToken, AddId, AddLastName, AddFirstName } from './signUpSlice';
//import { store } from "../service/store";

function getToken(data, navigate, dispatch){
    API
    .post(
        '/user/login',
        data 
        )
        .then(response => {
            if(response.status === 200){
                dispatch(AddToken(response.data.body.token))
                navigate('/user/profile')
            }
    return response.data
}).catch(error => {
    console.log('Error data token axiospost: ', error)})
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
        if(response.status === 200){
        //recupere nom + prenom
                dispatch(AddId(response.data.body.id))
                dispatch(AddFirstName(response.data.body.firstName))
                dispatch(AddLastName(response.data.body.lastName))
         }
            return response
        }).catch(error => {
            console.log('Error data port name axiospost: ', error)})
}

function changeName(data, token, dispatch){
    API
    .put(
        '/user/profile',
    data,
    {headers: {
        'Authorization': `Bearer  ${token}`,
    }})
    .then(response => {
        if(response.status === 200){
            //recupere nom + prenom
                    dispatch(AddFirstName(response.data.body.firstName))
                    dispatch(AddLastName(response.data.body.lastName))
             }
        return response
    }).catch(error => {
        console.log('Error data put name axiospost: ', error)})
}

export {
    getToken,
    getUserData,
    changeName
};





