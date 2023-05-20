import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useSelector } from 'react-redux'
import { Link, Outlet} from "react-router-dom"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import ListRegisterUserComponent from '../ClassComponents/ListRegisterUserComponent'
import RegisterUserClassComponent from '../ClassComponents/RegisterUserClassComponent'
import HomeComponent from '../home/HomeComponent'
import LoginComponent from '../login/LoginComponent'
import LogOutComponent from '../LogOutComponent'
import BasicRating from '../otherComponents/BasicRating'
import DataTable from '../otherComponents/DataTable'
import RegistrationComponent from '../otherComponents/RegistrationComponent'
import WelComePage from '../otherComponents/WelcomePage'
import ChildOne from '../propsDrilling/childComponents/childOne'
import ParentComponent from '../propsDrilling/parentComponent'

const NavigationComponent = () => {

  const getLoginState = useSelector((state: any) => state.loginReducer.isLogedIn);

  return (
    <>
      <BrowserRouter>
      <Navbar bg='primary' variant='dark'>
        <Container>
          <Link to="/">Dashboard</Link>
          <Link to="/homepage">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/childone">Chid One</Link>
          <Link to="/userlist">User List</Link>
          <Link to="/register">Register</Link>
          {getLoginState ? <Link to="/logout">Log Out</Link> : ''}
        </Container>
      </Navbar>
        <Routes>
            <Route path='/' element={<WelComePage />} />
            <Route path='/homepage' element={<HomeComponent />} />
            <Route path='/login' element={<LoginComponent />} />
            <Route path='/childone' element={<ChildOne />} />
            <Route path='/pricing' element={<BasicRating />} />
            <Route path='/userlist' element={<ListRegisterUserComponent />} />
            <Route path='/register' element={<RegisterUserClassComponent />} />
            <Route path='/logout' element={<LogOutComponent />} />
        </Routes>
      </BrowserRouter>
      {/* <Outlet /> */}
    </>
  )
}

export default NavigationComponent
