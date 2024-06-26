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
import Pay from "./pages/pay/Pay"
import Success from "./pages/success/Success"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register";
import './app.scss'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom"
import { QueryClient, QueryClientProvider  } from "@tanstack/react-query"


function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/gigs',
          element: <Gigs />
        },
        {
          path: '/gig/:id',
          element: <Gig />
        },
        {
          path: '/orders',
          element: <MyOrders />
        },
        {
          path: '/mygigs',
          element: <MyGigs />
        },
        {
          path: '/add',
          element: <Add />
        },
        {
          path: '/messages',
          element: <Messages />
        },
        {
          path: '/message/:id',
          element: <Message />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/pay/:id',
          element: <Pay />
        },
        {
          path: '/success',
          element: <Success />
        }
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
