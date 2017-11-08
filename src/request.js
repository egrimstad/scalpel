import axios from 'axios';


// HTTP helper
export function get(url){
  return axios.get(url).then(function (response){
  console.log(response);
  })
  .catch(function (error){
    console.log(error);
  });
}
