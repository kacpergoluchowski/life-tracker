import axios from "axios";

export default function addActivities(id, type) {
  const postData = {
    id: id,
    type: type,
    nickname: localStorage.getItem("nickname"),
  };
  return axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/addActivities`, postData)
    .then((response) => response.data)
    .catch((err) => {
      return {
        success: false,
        error: err,
      };
    });
}
