import axios from "axios";

// export default {
//   add: (param1, param2) => 
//     axios.get(`/api/calculator/add?param1=${param1}&param2=${param2}`),
//   subtract: (param1, param2) => 
//     axios.get(`/api/calculator/subtract?param1=${param1}&param2=${param2}`),
//   multiply: (param1, param2) => 
//     axios.get(`/api/calculator/multiply?param1=${param1}&param2=${param2}`),
//   divide: (param1, param2) => 
//     axios.get(`/api/calculator/divide?param1=${param1}&param2=${param2}`)
// };

const API_URL = "http://localhost:8080/api/doMath"

class API {

  doMath(doMathRequest){
    return axios.post(API_URL, doMathRequest)
  }
}

export default API;