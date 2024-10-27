import axios from "axios";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const BASE_URL = "https://youtube-data8.p.rapidapi.com";
const options = {
  method:"GET",
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "youtube-data8.p.rapidapi.com",
  },
};


export const fetchData = async (url) => {
  try{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    JSON.stringify((data))
    console.log("a",data)
    return data;
  }catch(error){
    console.error("error fetching api data: ", error);
    throw error;
  }
};


