import API from './api.jsx';


export default function getToken(data){
API
.post(
    '/user/login',
    data 
 )
.then(response => {
    console.log('Response data axiospost: ', response.data)
    return response.data
})
.catch(error => {console.log('Error data axiospost: ', error)})


}



