import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export async function getLanguagesList(): Promise<AxiosResponse<any>> {
  return await new Promise<AxiosResponse<any>>((resolve, reject) => {
    axios
      .get("https://api.github.com/repos/facebook/react/languages")
      .then((response) => {
        resolve(response.data);
      });
  });
}
