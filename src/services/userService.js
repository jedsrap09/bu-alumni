import axios from "axios";
import { urls } from "../constants";

export const postUser = async (body) => {
  try {
    const response = await axios.post(
      `${urls.base_url}${urls.user_url}/creation`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error posting user:", error);
    throw error;
  }
};

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImplZCIsImlhdCI6MTY5ODk5NDEzMSwiZXhwIjoxNjk4OTk3NzMxfQ.iP_2bs8pyKvf_LsM8Gg6w0p0Rt2gijRQCEgXdNyZ_0A",
  },
};


export const findIdCard = async (card_id) => {
  try {
    const response = await axios.get(
      `${urls.base_url}/api/alumni/search/1100501179248`,
      config
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const addAlumni = async (body) => {
  try {
    const response = await axios.post(
      `${urls.base_url}${urls.alumni_url}/add-alumni`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};