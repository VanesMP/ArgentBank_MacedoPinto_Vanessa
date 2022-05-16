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
            // console.log('Response data axiospost signup: ', response.data)
            // console.log(response.data.body.token)
            if(response.status === 200){
                dispatch(AddToken(response.data.body.token))
                navigate('/user/profile')
            }
    return response.data
})
// .catch(error => {console.log('Error data axiospost: ', error)})
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
            // console.log('Response data axiospost profile: ', response)
        if(response.status === 200){
        //recupere nom + prenom +id
                dispatch(AddId(response.data.body.id))
                dispatch(AddFirstName(response.data.body.firstName))
                dispatch(AddLastName(response.data.body.lastName))
         }
    return response
})
// .catch(error => {console.log('Error data axiospost: ', error)})
}

function changeName(data, token, dispatch){
    console.log(token)
    console.log(data)
    API
    .put(
        '/user/profile',
    data,
    {headers: {
        'Authorization': `Bearer  ${token}`,
    }})
    .then(response => {
        console.log('Changement de nom: ', response.data)
        if(response.status === 200){
            //recupere nom + prenom +id
                    dispatch(AddFirstName(response.data.body.firstName))
                    dispatch(AddLastName(response.data.body.lastName))
             }
        return response
    })
    console.log("envoie des donnees")
}

export {
    getToken,
    getUserData,
    changeName
};





