import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainContainer from "./component/MainContainer";
import Hotel from "./component/Hotel";



function App() {




  


  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainContainer />,
    },

    {
      path: "/hotel",
      element: <Hotel/>
    }
  ])


  return (
    <>

      <RouterProvider router={appRouter} />




    </>
  )
}

export default App
