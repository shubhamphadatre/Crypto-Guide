import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi.js";
import { cryptoNewsApi } from "../services/cryptoNewsApi";

export default configureStore({
    reducer : {
        [cryptoApi.reducerPath] : cryptoApi.reducer , 
        [cryptoNewsApi.reducerPath] : cryptoNewsApi.reducer , 
    } ,
})