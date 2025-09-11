import { createSlice } from "@reduxjs/toolkit";

const geoIdSlice = createSlice({
   
    name:"geoId",
    initialState:{
        data: null,
        loading: false,
        error: null
    },

    reducers:{
        addGeoId: (state, action) =>{
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        setLoading: (state) => {
            state.loading = true
            state.error = null
        },
        setError: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export const {addGeoId, setLoading, setError} = geoIdSlice.actions

export default geoIdSlice.reducer