import {axiosService}from "./axiosService";

import {urls} from "../config/urls";

const commentsServices ={
    getAll:()=> axiosService.get(urls.comments)
}

export {
   commentsServices
}