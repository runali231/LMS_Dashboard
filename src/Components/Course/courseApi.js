import axios from "axios";
import { getToken } from "../../util.token";


export const getCourses = () => {
  const token = getToken();
  const userId = "820ef9fe-43c1-4a57-a279-d3238a7da437";
  const url = new URL(
    `http://localhost:801/api/CourseDetails/GetCourse?UserId=${userId}`
  );

  return axios({
    method: "get",
    url: url,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });
};

