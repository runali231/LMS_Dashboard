import axios from "axios";
import { getToken } from "../../util.token";

export const getCourseDetails = () => {
  const token = getToken();
  const userId = "820ef9fe-43c1-4a57-a279-d3238a7da437";
  const id = localStorage.getItem("course_id");
  const url = new URL(
    `http://localhost:801/api/CourseDetails/GetCourse?UserId=${userId}&Id=${id}`
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

export const getSessionById = () => {
  const token = getToken();
  const userId = "820ef9fe-43c1-4a57-a279-d3238a7da437";
  const id = localStorage.getItem("course_id");
  const sessionId = "1255a163-32bd-4ca2-ae90-ae31b36aefb5";
  const url = new URL(
    `http://localhost:801/api/SessionDetails/GetSessionById?UserId=${userId}&CourseId=${id}&Id=${sessionId}`
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


export const editCourseForm = (data) => {
  const token = getToken();
  const userId = "820ef9fe-43c1-4a57-a279-d3238a7da437";
  const url = new URL(`http://localhost:801/api/CourseDetails`);
  // data.userId = userId;
console.log("data", data)
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

export const editSession = (sessionData, token) => {
  const url = new URL(`http://localhost:801/api/SessionDetails`);

  return axios({
    method: 'post',
    url: url,
    data: sessionData,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${token}`,
    },
  });
};
