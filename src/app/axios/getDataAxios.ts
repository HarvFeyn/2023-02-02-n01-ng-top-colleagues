import axios from "axios";
export async function getDataAxios<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error:any) {
    throw new Error(`Error in 'axiosGetJsonData(${url})': ${error.message}`);
  }
}
