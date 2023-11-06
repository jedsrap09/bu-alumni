import axios from "axios";
import { urls } from "../constants";
import { tempData } from "../../data/mockData";

const token = JSON.parse(localStorage.getItem("access_token"))

export const getAllInfo = async (min, max) => {
  //   const response = await axios.get(urls.base_url + urls.activity_url);
  const tempResponse = tempData.slice(min, max).map((item) => {
    return item;
  });
  return { response_data: tempResponse, count: tempData.length };
};

export const getAllNews = async () => {
  const response = await axios.get("http://localhost:3030/api/news/all",{headers:{
    Authorization:"Bearer "+token
  }});
  return response.data;
};
