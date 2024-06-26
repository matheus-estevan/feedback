import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { ThemeProvider } from "styled-components"

import { Home } from "./pages/Home"
import { Theme } from "./styles/theme"
import { GlobalStyle } from "./styles/global"

import React from 'react'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    }
])
 

export function App() {
  return (
    <ThemeProvider theme={Theme}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

