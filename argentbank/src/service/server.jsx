// const axios = require('axios')


// const getUsers = () => {
//     try {
//     return axios.post('http://localhost:3001/api/v1/user')
//     } catch (error) {
//     console.log(error)
//     }
// }

// const countUsers = async () => {
// const users = getUsers()
//                     .then(response => console.log(response.data))
//                     .catch(e => console.log(e))
// }

// countUsers()

// axios({
//     method: 'post',
//     url: 'http://localhost:3001/api/v1/',
//     // data: dataUser
// })
// .then(function (reponse) {
//     //On traite la suite une fois la réponse obtenue 
//     console.log(reponse);
// })
// .catch(function (erreur) {
//     //On traite ici les erreurs éventuellement survenues
//     console.log(erreur);
// });