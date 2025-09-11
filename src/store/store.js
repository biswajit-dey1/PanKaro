import {configureStore} from "@reduxjs/toolkit"
import geoidSlice from "./geoIdSlice"

const store = configureStore({
    reducer:{
     geoId: geoidSlice,
    }
})

export default store