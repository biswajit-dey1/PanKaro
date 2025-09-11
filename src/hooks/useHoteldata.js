import { useState } from "react"

import {useDispatch} from "react-redux"
import { addGeoId } from "../store/geoIdSlice"

export function useHoteldata() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const dispatch = useDispatch()

    // Get current date and next day for check-in/check-out
    const today = new Date() // This is today date
    const tomorrow = new Date(today) // here iam making copy of today and name it tommorrow
    tomorrow.setDate(tomorrow.getDate() + 1)  // and setting tommorow to adding +1 

    // Method 3: Different date formats  
    const formatDate = (date) => {
        return date.toISOString().split('T')[0] // Format: YYYY-MM-DD
    }

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '2addb4a703msh556f6e15fd3b93bp1bba52jsn916aebf77c00',
            'x-rapidapi-host': 'tripadvisor-com1.p.rapidapi.com'
        }
    };

    const URL = `https://tripadvisor-com1.p.rapidapi.com/attractions/search?geoId=304554&startDate=2025-09-11&endDate=2025-09-12&units=miles&sortType=asc`

    const searchHotel = async (city) => {

        if (!city) return
        
        setLoading(true)
        setError(null)
        
        try {
            const URI_GEOID = `https://tripadvisor-com1.p.rapidapi.com/auto-complete?query=${city}`
            const response = await fetch(URI_GEOID, options)
            const data = await response.json()
            
            console.log('Hotel data:', data)

            dispatch(addGeoId(data.data[0].geoId))
        } catch (err) {
            setError(err.message)
            console.error('Error fetching hotel data:', err)
        } finally {
            setLoading(false)
        }
    }

    return { searchHotel, loading, error }
}

