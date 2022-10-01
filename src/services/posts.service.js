import {axiosService}from "./axiosService";

import {urls} from "../config/urls";

const postsService ={
    getAll:(id)=> postsService.get(`${urls.posts}/{id}`)
}

export {
    postsService
}