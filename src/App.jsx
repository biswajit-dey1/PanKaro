import { useEffect, useState } from "react";
import Header from "./component/Header";
import MainContainer from "./component/MainContainer";

function App() {


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
      'x-rapidapi-key': '1ae2cbf55fmshbd148e08040b462p189365jsn9107c57220a7',
      'x-rapidapi-host': 'tripadvisor-com1.p.rapidapi.com'
    }
  };


  const URL = `https://tripadvisor-com1.p.rapidapi.com/attractions/search?geoId=304554&startDate=2025-09-05&endDate=2025-09-06&units=miles&sortType=asc`
  
 const URI_GEOID = `https://tripadvisor-com1.p.rapidapi.com/auto-complete?query=Mumbai`



  const searchHotel = async () => {
    const response = await fetch(URI_GEOID, options)
    const data = await response.json()

    console.log('API Response:', data)

  }

  useEffect(() => {
    searchHotel()
  }, [])

  return (
    <>
      
      <MainContainer/>
      

    </>
  )
}

export default App
