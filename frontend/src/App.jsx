import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "lucide-react";


function App() {


  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
