import Home from './pages/home/Home'
import Login from './pages/login/Login'
import List from './pages/list/List'
import Single from './pages/single/Single'
import New from './pages/new/New'
import './style/dark.scss'


import {  BrowserRouter,  Routes,  Route,} from "react-router-dom";
import { porductInputs, userInputs } from './formSource'
import { useContext, useState } from 'react'
import { DarkModeContext } from './context/darkModeContext'

const App = () => {

  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode? "app dark":"app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}></Route>
            <Route path="login" element={<Login />} ></Route>
            <Route path="users">
              <Route index element={<List />}></Route>
              <Route path=':userId' element={<Single />}></Route> 
              <Route path='new' element={<New inputs={userInputs} title="Add New User" />}></Route>
            </Route>
            <Route path="products">
              <Route index element={<List />}></Route>
              <Route path=':productId' element={<Single />}></Route>
              <Route path='new' element={<New inputs={porductInputs} title="Add New Product" />}></Route>
            </Route>

            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App