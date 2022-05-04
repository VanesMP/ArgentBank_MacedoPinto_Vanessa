import axios from 'axios';

export default axios.create({
  baseURL: `http://localhost:3001/api/v1`
});


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