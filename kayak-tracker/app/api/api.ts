import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { getTokenWorkaround } from "../actions/authActions";

axios.defaults.baseURL = "http://localhost:7001/api/"; //import.meta.env.VITE_API_URL; //"https://localhost:44395/api/";

// Define a type for the response data
interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
}

// Define a type for the API error
interface ApiError {
  message: string;
  status: number;
}

export const get = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  try {
    const response: AxiosResponse<T> = await axios.get(url, {
      ...config,
      headers: await getHeaders(),
    });
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios error
      const axiosError = error as import("axios").AxiosError<ApiError>;
      throw {
        message: axiosError.response?.data?.message || axiosError.message,
        status: axiosError.response?.status || 500,
      };
    } else {
      // Non-Axios error
      throw {
        message: "An unexpected error occurred",
        status: 500,
      };
    }
  }
};

async function getHeaders() {
  const token = await getTokenWorkaround();
  const headers = { "Content-type": "application/json" } as any;
  if (token) {
    headers.Authorization = "Bearer " + token.access_token;
  }
  return headers;
}
