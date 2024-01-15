import axios, { AxiosResponse } from "axios";

export const apiUrl = "http://localhost:4000";

export const getCounters = (): Promise<
  AxiosResponse<{ counters: Record<string, number> }>
> => {
  return axios.get(`${apiUrl}/counters`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export const createUser = (
  username: string
): Promise<AxiosResponse<{ username: string }>> => {
  return axios.post(`${apiUrl}/login`, {
    username,
  });
};

export const increaseCounter = (
  username: string
): Promise<AxiosResponse<{ counters: Record<string, number> }>> => {
  return axios.put(`${apiUrl}/counters/${username}`);
};
