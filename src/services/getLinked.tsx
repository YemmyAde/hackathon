import React from "react";
import axios from "axios";
import { IContactData } from "../app/interface/contact";
import { IRegister } from "../app/interface/register";

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

http.interceptors.response.use(null!, (error: any) => {
  let errorMsg;
  const serverError =
    error.response &&
    error.response.status >= 500 &&
    error.response.status < 599;

  const clientError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 499;
  if (error?.response?.data?.message) {
    errorMsg = error?.response?.data?.message;
  } else if (serverError) {
    errorMsg = "Server error";
  } else if (clientError) {
    errorMsg = error;
  } else if (error.message === "Network Error") {
    errorMsg = error.message;
  }

  return Promise.reject(errorMsg);
});

export const contact = async (payload: IContactData) => {
  const data = await http.post("/hackathon/contact-form", payload);
  return data;
};

export const getCategory = async () => {
  const data = await http.get("/hackathon/categories-list");
  return data;
};

export const postRegister = async (payload: IRegister) => {
  const data = await http.post("/hackathon/registration", payload);
  return data;
};

// contact = {
//     "email":"sample@eexample.com",
//     "phone_number":"0903322445533",
//     "first_name": "Space Explore",
//     "message": "I need further info"
// }

// {
//     "email":"sample@eexample.com",
//     "phone_number":"0903322445533",
//     "team_name": "Space Explore",
//     "group_size": 10,
//     "project_topic":"Web server propagation",
//     "category": 1,
//     "privacy_poclicy_accepted": true
// }
