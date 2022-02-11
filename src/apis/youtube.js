//this is used to make api calls
import axios from "axios";

//YOUTUBE API ACCESS KEY
const KEY = "AIzaSyCX9hVGLFV5JmgmTR4AVBWseGp-D9gHuqU";

//setting to connect to youtube api
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
