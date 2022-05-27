import axiosClient from "./apiClient";

export const apiGetNews = async (params) => {
    let res = await axiosClient.get('/everything', {params})
    return res
}