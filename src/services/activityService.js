import axios from "axios";
import { urls } from "../constants";
import { tempData } from "../../data/mockData";

const token = JSON.parse(localStorage.getItem("access_token"));

export const getAllActivities = async (min, max) => {
  //   const response = await axios.get(urls.base_url + urls.activity_url);
  const tempResponse = tempData.slice(min, max).map((item) => {
    return item;
  });
  return { response_data: tempResponse, count: tempData.length };
};

export const getAllActivity = async (min, max) => {
  const response = await axios.get(
    `${urls.base_url}${urls.activity_url}/all?offset=${min}&limit=${max}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return response.data;
};

export const getUsersActivityByUserId = async (min, max) => {
  const response = await axios.get(
    `${urls.base_url}${urls.activity_url}/all?offset=${min}&limit=${max}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return response.data;
};

export const postUserAttendActivity = async (min, max) => {
  const response = await axios.get(
    `${urls.base_url}${urls.activity_url}/all?offset=${min}&limit=${max}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return response.data;
};

export const getActivity = async () => {
  const response = await axios.get(
    `${urls.base_url}${urls.activity_url}/selection/1`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return response.data;
};