import React from "react"
import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import Gig from "./pages/gig/Gig"
import Gigs from "./pages/gigs/Gigs"
import MyGigs from "./pages/myGigs/MyGigs"
import MyOrders from "./pages/myOrders/MyOrders"
import Add from "./pages/add/Add"
import Messages from "./pages/messages/Messages"
import Message from "./pages/singleMessage/Message"
import './app.scss'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom"

function App() {

  const Layout = () =>{
    return(
      <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element: <Home/>
        },
        {
          path:'/gigs',
          element: <Gigs/>
        },
        {
          path:'/gig/:id',
          element: <Gig/>
        },
        {
          path:'/orders',
          element: <MyOrders/>
        },
        {
          path:'/mygigs',
          element: <MyGigs/>
        },
        {
          path:'/add',
          element: <Add/>
        },
        {
          path:'/messages',
          element: <Messages/>
        },
        {
          path:'/message/:id',
          element: <Message/>
        },
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
