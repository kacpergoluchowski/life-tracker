import axios from "axios";

export default async function registerUser(email, nickname, password) {
  const postData = {
    email: email,
    nickname: nickname,
    password: password
  };

  try {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/addUser`, postData);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`blad: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    throw new Error(`blad: ${error.message}`);
  }
}
