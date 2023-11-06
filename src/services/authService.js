import axios from "axios";
import { urls } from "../constants";
import Swal from "sweetalert2";

export const postLogin = async (userData) => {
  try {
    const response = await axios.post(
      `${urls.base_url}${urls.user_url}/login`,
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error posting user:", error);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${error.response.data.message}`
    })
    throw error;
  }
};

export const logout = () => {
  localStorage.clear();
  window.location.href = "/";
};
