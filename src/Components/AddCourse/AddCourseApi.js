import axios from "axios";
import { getToken } from "../../util.token";



export const addCourseForm = (data) => {
  const token = getToken();
  const userId = "820ef9fe-43c1-4a57-a279-d3238a7da437";
  const url = new URL(`http://localhost:801/api/CourseDetails`);
  data.userId = userId;

  return axios({
    method: "post",
    url: url,
    data: data,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const UploadImage = (image) => {
  const token = getToken();
  const userId = "820ef9fe-43c1-4a57-a279-d3238a7da437";
  const formData = new FormData();
  formData.append("file", image);
  formData.append("userId", userId);
  formData.append("name", "course");
  const url = new URL("http://localhost:800/api/Files/Files");

  return axios({
    method: "post",
    url: url,
    data: formData,
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};
