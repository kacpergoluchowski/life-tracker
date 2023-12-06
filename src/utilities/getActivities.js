import axios from "axios";

export default function getActivities() {
    const postData = {
        nickname: localStorage.getItem('nickname')
    }
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/getActivities`, postData)
    .then( response => response.data)
    .catch((err) => {
      return {
        success: false,
        error: err,
      };
    });
}
