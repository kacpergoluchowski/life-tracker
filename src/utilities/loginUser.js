import axios from "axios";

export default function loginUser(nickname, password) {
  const postData = {
    nickname: nickname,
    password: password
  };

  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/loginUser`, postData)
    .then(response => response.data)
    .catch(error => {
      return {
        success: false,
        error: `blad: ${error.message}`
      };
    });
}
