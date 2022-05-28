import axios from "axios";

export async function getAllTemplates() {
  const response = await axios(process.env.REACT_APP_ALL_TEMPLATE);
  return response;
}

export async function getSingleTemplate(id) {
  const response = await axios(process.env.REACT_APP_SINGLE_TEMPLATE + `${id}`);
  return response;
}
